<div class="nav-wrapper">
  <nav class="navbar navbar-default navbar-static-top" data-spy="affix" data-offset-top="40">
    <div class="container-fluid">
      <div class="navbar-header">
        <a class="navbar-brand" href="<?php echo get_bloginfo( 'url' ); ?>">
          <?php
              // vars
              $custom_logo_id = get_theme_mod( 'custom_logo' );
              $logo = wp_get_attachment_image_src( $custom_logo_id , 'full' );
              global $display_logo;
              $display_logo = esc_url( $logo[0] );
              if ( has_custom_logo() ) {
                  echo '<img src="'. $display_logo .'" alt="' . get_bloginfo( 'name' ) . '" class="navLogo">';
              } else {
                  echo get_bloginfo( 'name' );
              }
          ?>
        </a>
      </div>
      <div class="navbar-right">
        <!-- <div class="navbar-collapse collapse" id="navbar">
          <ul class="nav navbar-nav">
            <li>
              <a href="javascript:void(0)">WHEELS</a>
            </li>
            <li>
              <a href="javascript:void(0)">TIRES</a>
            </li>
            <li>
              <a href="javascript:void(0)">ACCESSORIES</a>
            </li>
          </ul>
        </div> -->
        <!-- .navbar-collapse -->
        <?php
		            wp_nav_menu( array(
		               'menu'              => 'primary',
		               'theme_location'    => 'primary',
		               'depth'             =>  1,
		               'container'         => 'div',
		               'container_class'   => 'collapse navbar-collapse',
		               'container_id'      => 'navbar',
		               'menu_class'        => 'nav navbar-nav',
		               'fallback_cb'       => 'wp_bootstrap_navwalker::fallback',
		               'walker'            => new wp_bootstrap_navwalker())
		            );
        		?>
        <!--/.nav-collapse -->
        <div class="toggle-wrapper">
          <button type="button" class="navbar-toggle side-nav-open">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
        </div>
      </div>
    </div>
  </nav>
</div>
