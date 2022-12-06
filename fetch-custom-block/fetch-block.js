wp.blocks.registerBlockType('fetch/custom-block', {
	title: 'Fetch API Block',
	icon: 'hammer',
	category: 'theme',
	attributes: {
		postUrl: { type: 'string' },
	},
	edit: function(props) {

		function updatePostUrl(event) {
			props.setAttributes({postUrl: event.target.value})
		}

		return React.createElement("div", null, /*#__PURE__*/React.createElement("label", null, "Enter URL"), /*#__PURE__*/React.createElement("input", {
		  type: "text",
		  value: props.attributes.postUrl,
		  placeholder: "Fetch URL ",
		  onChange: updatePostUrl
		}));
	},
	save: function(props) {
		return React.createElement("div", null, /*#__PURE__*/React.createElement("h4", null, "URL: ", /*#__PURE__*/React.createElement("span", {
		  id: "post-url"
		}, props.attributes.postUrl)));
	}
})