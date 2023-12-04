const styles = document.createElement('style');
styles.innerHTML = `
    .detail.detail--slider.detail--images.detail--xd {
        position: fixed !important;
        top: 0 !important;
        left: 0 !important;
        z-index: 5 !important;
        height: 100vh !important;
        padding: 2rem !important;
    }

    .detail__pane {
        height: 100% !important;
    }

    .detail__body.detail__body--images {
        height: 100% !important;
        display: flex !important;
        justify-content: center !important;
        align-items: center !important;
    }

    .detail__media__img-link.js-detail-img.js-image-detail-link,
    .detail__media__img-highres.js-detail-img.js-detail-img-high,
    .detail__media__img-thumbnail.js-detail-img.js-detail-img-thumb,
    .detail__media__img-bg, .js-detail-img, .js-detail-img-bg
    {
        height: auto !important;
        width: 100% !important;
        object-fit: contain !important;
    }

    .detail__close.js-detail-close {
        top: 5rem !important;
    }
`;
document.head.appendChild(styles);