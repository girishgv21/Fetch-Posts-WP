function runFetch() {
	let siteURL = document.getElementById('post-url').innerText
	document.getElementById('fetch-posts').innerHTML = ""
	fetch(siteURL).then((response) => {
		console.log(' resolved' , response);
		return response.json();
	}).then(data => {
		console.log(data[1].title.rendered);
		var fetchPostsEle = document.getElementById('fetch-posts')
		data.forEach((item, index) => {
			let postTitle = data[index].title.rendered
			var postImage = data[index].featured_image_url
			let postLink = data[index].link
			if (postImage) {
				postImage = `background-image: url(${data[index].featured_image_url})`
			} else if(data[index].episode_featured_image) {
				postImage = `background-image: url(${data[index].episode_featured_image})`
			} else if(data[index].jetpack_featured_media_url) {
				postImage = `background-image: url(${data[index].jetpack_featured_media_url})`
			} else {
				postImage = 'background-image: url(/wp-content/uploads/2022/11/ef3-placeholder-image.jpg)'
			}
			let postFullDate = new Date(data[index].date)
			postFullDate = postFullDate.getDate() + '/' + postFullDate.getMonth() + '/' + postFullDate.getFullYear()

			const parentElement = document.createElement('div')
			parentElement.className = 'post-slide'

			const titleElement = document.createElement('div')
			titleElement.className = 'post-title'
			const titleElementWrap = document.createElement('h5')

			const imgElement = document.createElement('div')
			imgElement.className = 'post-thumb'

			const dateElement = document.createElement('div')
			const dateElementWrap = document.createElement('p')

			const linkElement = document.createElement('a')
			linkElement.setAttribute('href', postLink)
			linkElement.setAttribute('target', '_blank')
			linkElement.className = 'link-overlay'


			imgElement.setAttribute('style', postImage)
			imgElement.setAttribute('alt', 'Post Thumbnail')

			titleElementWrap.innerHTML = postTitle		
			dateElementWrap.innerHTML = postFullDate	
			titleElement.append(titleElementWrap)
			dateElement.append(dateElementWrap)
			parentElement.append(linkElement)
			parentElement.append(imgElement)
			parentElement.append(titleElement)
			parentElement.append(dateElement)
			fetchPostsEle.append(parentElement)
			console.log(data[index].title.rendered);
		});
		
		if (document.getElementById('fetch-posts').classList.contains('slick-initialized')) {
			jQuery('#fetch-posts').slick('unslick')
		}
		
		function slickInit() {
			jQuery('#fetch-posts').slick({
				slidesToShow: 3,
				slidesToScroll: 1,
				dots: true,
				arrows: false,
				adaptiveHeight: true,
				infinite: false,
				  responsive: [
					{
					  breakpoint: 900,
					  settings: {
						slidesToShow: 2,
					  }
					},
					{
					  breakpoint: 600,
					  settings: {
						slidesToShow: 1,
					  }
					}
				]
			})
		}
		
		slickInit()
	
		
		document.getElementById('fetch-posts').classList.add('loaded')
	}).catch((err) => {
		console.log('rejected' , err);
	});
}

runFetch();
