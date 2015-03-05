CKEDITOR.editorConfig = function (config) {
  
	config.toolbar = 'Full';
 
  	// Filebrowser routes
  	// The location of an external file browser, that should be launched when "Browse Server" button is pressed.
  	config.filebrowserBrowseUrl = "/ckeditor/attachment_files";
  	// The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Flash dialog.
  	config.filebrowserFlashBrowseUrl = "/ckeditor/attachment_files";
  	// The location of a script that handles file uploads in the Flash dialog.
  	config.filebrowserFlashUploadUrl = "/ckeditor/attachment_files";
  	// The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Link tab of Image dialog.
  	config.filebrowserImageBrowseLinkUrl = "/ckeditor/pictures";
  	// The location of an external file browser, that should be launched when "Browse Server" button is pressed in the Image dialog.
  	config.filebrowserImageBrowseUrl = "/ckeditor/pictures";
  	// The location of a script that handles file uploads in the Image dialog.
  	config.filebrowserImageUploadUrl = "/ckeditor/pictures";
  	// The location of a script that handles file uploads.
  	config.filebrowserUploadUrl = "/ckeditor/attachment_files";

	// You could delete or reorder any of this elements as you wish
  	config.toolbar_Menu = [
    	{ name: 'document', items: ['Source', '-', 'Save', 'NewPage', 'DocProps', 'Preview', 'Print', '-', 'Templates'] }, 
    	{ name: 'clipboard', items: ['Cut', 'Copy', 'Paste', 'PasteText', 'PasteFromWord', '-', 'Undo', 'Redo'] }, 
    	{ name: 'editing', items: ['Find', 'Replace', '-', 'SelectAll', '-', 'SpellChecker', 'Scayt'] }, 
    	{ name: 'tools', items: ['Maximize', 'ShowBlocks', '-', 'About'] }, '/', 
    	{ name: 'basicstyles', items: ['Bold', 'Italic', 'Underline', 'Strike', 'Subscript', 'Superscript', '-', 'RemoveFormat'] }, 
    	{ name: 'paragraph', items: ['NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', 'CreateDiv', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight', 'JustifyBlock', '-', 'BidiLtr', 'BidiRtl'] }, 
    	{ name: 'links', items: ['Link', 'Unlink', 'Anchor'] }, '/', 
    	{ name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] }, 
    	{ name: 'colors', items: ['TextColor', 'BGColor'] }, 
    	{ name: 'insert', items: ['Image', 'Flash', 'Table', 'HorizontalRule', 'Smiley', 'SpecialChar', 'PageBreak'] }
    ];

  	config.toolbar_mini = [
    	["Bold",  "Italic",  "Underline",  "Strike",  "-",  "Subscript",  "Superscript"],
  	];
}
;