Router.route('/', {
  name: 'home'
});

Router.route('/dashboard', {
  name: 'dashboard'
});

Router.route('/test', {
  name: 'test'
});

Router.route('/teacher-room', {
  name: 'teacherRoom'
});

Router.plugin('ensureSignedIn', {
  only: ['dashboard']
});
