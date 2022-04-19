export default {
  setupComponent(args, component) {
    const imagesUrls = settings.image_urls.split('|');
    component.set('sponsorImages', imagesUrls);
  },
};
