export default {
  setupComponent(args, component) {
    const imagesUrls = settings.image_urls.split('|');
    console.log('images', imagesUrls);
    component.set('sponsorImages', imagesUrls);
  },
};
