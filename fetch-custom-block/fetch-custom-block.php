<?php
/*
* Plugin Name: Fetch Custom Block
* Description: Fetch Custom Block for Posts
*/
function fetch_custom_block_script_register()
{
wp_enqueue_script('fetch-custom-block',plugin_dir_url(__FILE__).'fetch-block.js',array('wp-blocks' ,'wp-i18n', 'wp-editor'),true,false);
}
add_action('enqueue_block_editor_assets','fetch_custom_block_script_register');

?>