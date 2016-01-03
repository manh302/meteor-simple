Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});


Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  where: 'client'
});
Router.route('/about', {
  name: 'about',
  controller: 'AboutController',
  where: 'client'
});

Router.route('rsvp', {
  name: 'rsvp',
  controller: 'RsvpController',
  where: 'client'
});