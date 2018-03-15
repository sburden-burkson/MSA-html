jQuery(function($){
    
    // Collection Masonry
    if($('.collection-item-container .collection-item').length){
        var $collectionGrid = $('.collection-item-container').masonry({
          // options
          itemSelector: '.collection-item',
          columnWidth: 300,
          isFitWidth: true,
          gutter: 20,
          horizontalOrder: true
        });
        
        $collectionGrid.imagesLoaded().progress(function() {
          $collectionGrid.masonry('layout');
        });
    }

    // Match Height JS
    $(".collectionHeight").matchHeight({byRow: false});
    $(".collection-img-wrap").matchHeight({byRow: false});
    $(".collection-col").matchHeight({byRow: false});
    
    // Convert query string to object (For color filters code below)
    function queryObject(queryString){
        var queryObj = {};
        var queryArr1 = queryString.split('&');
        for(var i=0; i < queryArr1.length; i++){
            var currVar = queryArr1[i].split('=');
            var currFilter = currVar[0].split('filter_');
            currFilter = currFilter[currFilter.length-1];
            var currValues = currVar[currVar.length-1].replace('%2C', ',').split(',');
            queryObj[currFilter] = currValues;
        }
        return queryObj;
    }
    
    // Compare two query objects with array values
    function diffObject(a, b) {
        var foundDiff = false;
        return Object.keys(a).concat(Object.keys(b)).reduce(function(map, k) {
            var warningTriggered = false;
            c = $(a[k]).not(b[k]).get();
            d = $(b[k]).not(a[k]).get();
            e = c.concat(d);
            if (e.length && e[0].length) {
                if(foundDiff && (map['slug'] !== k || map['value'] !== e[0])){
                    console.log('Warning: Found more than one difference in diffObject().');
                    console.log(' ^ Before: ', JSON.stringify(map));
                    warningTriggered = true;
                }else{
                    foundDiff = true;
                }
                map['slug'] = k;
                map['value'] = e[0];
                if(warningTriggered){
                    console.log(' ^ After: ', JSON.stringify(map));
                }
            }
            return map;
        }, {});
    }
    
    // Colors to Swatches (Filter Modal)
    // Use var `colorVals`, `pageURL` and `queryString` set in archive-product.php
    // Overrides the default WooCommerce filters so the page doesn't refresh with each added filter.
    // Unfortunately, WooCommerce did not include information about each attribute in the HTML.
    // Goal: Use the current URL and the URL link from each filter to glean attribute slugs and values.
    //       Once we know what is what, we can decide which values are to be "swatchified".
    // Known issues: Does not work with the "OR" query type selection.
    //console.log(pageURL);
    //console.log(queryString);
    //console.log(colorVals);
    $('.shop-filters-widget-area .woocommerce-widget-layered-nav-list').each(function(){
        var isColorList = false;
        var isColorListArr = [];
        var isColorListCount = 0;
        var valuesCount = $(this).find('li').length;
        
        $(this).find('li').each(function(){
            var isChosen = ($(this).hasClass('chosen'))? true : false;
            var aHref = $(this).find('a').attr('href')+'';
            
            // Check for URL query
            if(aHref.indexOf('?') !== -1){
                var hrefQuery = aHref.split('?');
                hrefQuery = hrefQuery[hrefQuery.length-1];
            }else{
                hrefQuery = '';
            }
            
            // If filter is chosen, then the value will not be in the new URL.
            // Goal: Find the difference between the new URL vars and the current URL vars.
            //       The difference is the value of the current attribute.
            if(isChosen){
                
                // Convert query string to object
                var currQuery = queryObject(queryString);
                var linkQuery = queryObject(hrefQuery);
                
                // Find missing attribute
                var linkDiff = diffObject(currQuery, linkQuery);
                var attrSlug = linkDiff['slug'];
                var attrValue = linkDiff['value'];
            
            // If filter is NOT chosen, then the value will be at the end of the new URL.
            // Goal: Chop off the end of the URL vars to find the current attribute value.
            }else{
                // Find last value (which is the current attribute)
                var aHrefSplit = hrefQuery.split('&');
                var aHrefLast = aHrefSplit[aHrefSplit.length-1];
                var aHrefLastSplit = aHrefLast.split('=');
                var attrSlug = aHrefLastSplit[0];
                var attrValue = aHrefLastSplit[aHrefLastSplit.length-1];

                // Check for multiple values
                if(attrValue.indexOf(',') !== -1){
                    attrValue = attrValue[attrValue.length-1].replace('%2C', ',').split(',');
                    attrValue = attrValue[attrValue.length-1];
                }
            }
            
            // Remove "filter_" from slug
            if(attrSlug.indexOf('filter_') == 0){
                attrSlug = attrSlug.substring(7);
            }
            
            // Check if color swatch exists
            if(attrSlug in colorVals && attrValue in colorVals[attrSlug]){
                isColorListArr.push(true);
                isColorListCount++;
            }else{
                isColorListArr.push(false);
            }
            
            //console.log(attrSlug+': '+attrValue);
            $(this).data('attrslug', attrSlug);
            $(this).data('attrvalue', attrValue);
        });
        
        // If list of colors, replace with swatches
        if(isColorListCount > 1 || isColorListCount == valuesCount){
            
            $(this).find('li').each(function(){
                var attrSlug = $(this).data('attrslug');
                var attrValue = $(this).data('attrvalue');
                if(attrSlug in colorVals && attrValue in colorVals[attrSlug]){
                    var attrColor = colorVals[attrSlug][attrValue];
                    $(this).addClass('color-swatch hover-tooltip-trigger');
                    var attrName = $(this).find('a').html();
                    $(this).find('a').html('').css({'background-color': attrColor});
                    
                    // Add tooltip
                    $(this).append('<div class="hover-tooltip">'+attrName+'</div>');
                }
            });
            
        }
    });
    
    // Get Attribute Slug and Value for our new form
    $('.shop-filters-widget-area .woocommerce-widget-layered-nav-dropdown').each(function(){
        
    });
    
    // Filter updates
    var pageUrlFull = pageURL+((queryString.length)? ('/?'+queryString) : '');
    console.log('Original URL: '+pageUrlFull);
    console.log('================================');
    var newURL = pageUrlFull;
    var filterChanging = false;
    function updateFilterChoices(attrSlug, attrValue, force_single){
        force_single = (force_single === true)? true : false;
        
        // Add missing 'filter_'
        if(attrSlug.indexOf('filter_') !== 0){
            attrSlug = 'filter_'+attrSlug;
        }
        
        // Make sure there isn't a duplicate click
        if(!filterChanging){
            filterChanging = true;
            var newURLQuery = newURL.split('?');
            newURLQuery = newURLQuery[newURLQuery.length-1];
            var newURLVars = [];
            console.log('Slug = '+attrSlug+', Value = '+attrValue);

            // Check for any query vars
            if(newURL.indexOf('/?') !== -1){
                var currURLVars = newURLQuery.split('&');
                var slugFound = false;
                
                if(currURLVars.length){
                    // Check for specific query var
                    for(var i=0; i<currURLVars.length; i++){
                        var currVar = currURLVars[i].split('=');

                        if(currVar.length == 2){
                            var currVarSlug = currVar[0];
                            var currVarValue = currVar[1];
                            var currVarValueArr = currVarValue.replace('%2C', ',').split(',');
                            
                            // Check for slug match
                            console.log('Comparing slugs "'+currVarSlug+'" and "'+attrSlug+'".');
                            if(currVarSlug == attrSlug){
                                slugFound = true;
                                
                                // Check for override to replace instead of add
                                if(force_single){
                                    console.log(' ^ Override: force_single. Replacing...');
                                    if(attrValue.length){
                                        currVarValueArr = [attrValue];
                                    }else{
                                        currVarValueArr = [];
                                    }
                                }else{
                                    // Check for specific value
                                    var valueIndex = currVarValueArr.indexOf(attrValue);

                                    // Value found, remove
                                    if(valueIndex !== -1){
                                        console.log('Slug found! Value found! Removing...');
                                        currVarValueArr.splice(valueIndex, 1);

                                    // Value not found, add
                                    }else if(attrValue.length){
                                        console.log('Slug found! Value not found! Adding...');
                                        currVarValueArr.push(attrValue);
                                    }
                                }
                                
                                // Make sure at least 1 value remains
                                if(currVarValueArr.length){
                                    var newVarValue = currVarValueArr.join(',');

                                    // Add to newURLVars
                                    newURLVars.push([currVarSlug, newVarValue].join('='));
                                }
                            
                            // Slug not found. Maintain value.
                            }else{
                                console.log('Slug not found! Maintaining "'+[currVarSlug, currVarValue]+'"');
                                newURLVars.push([currVarSlug, currVarValue].join('='));
                            }
                            
                        }else{
                            console.log('Warning: Invalid query var found.', currURLVars[i])
                        }
                    }
                }
                
                // Not found in query, add new value
                if((!slugFound || !currURLVars.length) && attrValue.length){
                    newURLVars.push(attrSlug+'='+attrValue);
                }
                
                newURL = pageURL+((newURLVars.length)? ('/?'+newURLVars.join('&')) : '');
            
            // No values found
            }else{
                newURL += '/?'+attrSlug+'='+attrValue;
            }
            console.log('newURL = '+newURL);
            console.log('================================');
            setTimeout(function(){
                filterChanging = false;
            }, 100);
        }
    }
    
    // Apply button click event
    $('#wheel_filter_apply').click(function(){
        if(newURL !== pageUrlFull){
            console.log('================================');
            window.location = newURL;
        }else{
            $(this).closest('.modal').modal('toggle');
        }
    });
    
    // Auto override override
    function filterRedirectOverride(e){
        e.preventDefault();
        return false;
    }
    $('.shop-filters-widget-area form.woocommerce-widget-layered-nav-dropdown').submit(function(e){
        return filterRedirectOverride(e);
    });
    var filterToggling = false;
    function filterActiveToggle(el){
        if(!filterToggling){
            filterToggling = true;
            if(el.hasClass('chosen')){
                el.removeClass('chosen');
            }else{
                el.toggleClass('active');
            }
            // Prevent both 'li' and 'li a' click events from firing at the same time
            setTimeout(function(){
                filterToggling = false;
            }, 100);
        }
    }
    $('.shop-filters-widget-area ul.woocommerce-widget-layered-nav-list li').click(function(e){
        var el = $(this);
        filterActiveToggle(el);
        updateFilterChoices(el.data('attrslug'), el.data('attrvalue'));
    });
    $('.shop-filters-widget-area ul.woocommerce-widget-layered-nav-list li a').click(function(e){
        var el = $(this).closest('li');
        filterActiveToggle(el);
        updateFilterChoices(el.data('attrslug'), el.data('attrvalue'));
        return filterRedirectOverride(e);
    });
    $('.shop-filters-widget-area form.woocommerce-widget-layered-nav-dropdown select').change(function(){
        var attrSlug = $(this).closest('form').find("input[name^='filter_']").attr('name');
        var attrValue = $(this).val();
        updateFilterChoices(attrSlug, attrValue, true);
    });
});