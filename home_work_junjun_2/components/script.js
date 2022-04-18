class YouTubePlayer extends HTMLElement {

    constructor() {
        super();
        this.videoId = null;
        this.width = null;
        this.height = null;
        this.shadow = this.attachShadow({mode: 'open'});
        this.init();
    };

    get() {
        const youTube = document.querySelectorAll('you-tube-player')[0];
        this.videoId = youTube.getAttribute('data-video-id');
        this.width = youTube.getAttribute('data-width');
        this.height = youTube.getAttribute('data-height');
    };

    set() {
        const container = document.createElement('div');
        container.setAttribute('align', 'center');

        this.getVideo()
            .then(response => {
                container.innerHTML = response;
                container.firstElementChild.setAttribute('width', this.width)
                container.firstElementChild.setAttribute('height', this.height)
                container.firstElementChild.setAttribute('src', `https://www.youtube.com/embed/${this.videoId}`)
            })
        this.shadow.appendChild(container)
    };

    async getVideo() {
        const video = await fetch('components/iframe.html')
        return video.text();
    };

    init() {
        this.get();
        this.set();
    };
}

customElements.define('you-tube-player', YouTubePlayer);