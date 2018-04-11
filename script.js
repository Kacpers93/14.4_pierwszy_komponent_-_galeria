var movies = [
  {
    id: 1,
    title: 'Harry Potter',
    desc: 'film o czarodzieju',
    image: 'https://picsum.photos/400/300/?image=5',
  },
  {
    id: 2,
    title: 'Król Lew',
    desc: 'Film o królu sawanny',
    image: 'https://picsum.photos/400/300/?image=290',
  },
  {
    id: 3,
    title: 'Flash',
    desc: 'serial o super szybkim człowieku',
    image: 'https://picsum.photos/400/300/?image=666',
  },
  {
    id: 4,
    title: 'Dr.House',
    desc: 'serial o lekarzu',
    image: 'https://picsum.photos/400/300/?image=123',
  },
  {
    id: 5,
    title: 'Interstellar',
    desc: 'film o podróży kosmicznej',
    image: 'https://picsum.photos/400/300/?image=890',
  },
];

var MovieTitle = React.createClass({
  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement('h2', {}, this.props.title);
  }
});


var MovieDescription = React.createClass({
  propTypes: {
    text: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement('p', {}, this.props.desc);
  }
});

var MovieImg = React.createClass({
  propTypes: {
    image: React.PropTypes.string.isRequired
  },
  render: function () {
    return React.createElement('img', {
      src: this.props.image
    });
  }
});



var Movie = React.createClass({
  propTypes: {
    movie: React.PropTypes.object.isRequired
  },
  render: function () {
    return (React.createElement('li', {},
      React.createElement(MovieTitle, {
        title: this.props.movie.title
      }),
      React.createElement(MovieDescription, {
        desc: this.props.movie.desc
      }),
      React.createElement(MovieImg, {
        image: this.props.movie.image
      })
    ));
  }
});


var MovieWrapper = React.createClass({
  propTypes: {
    feat: React.PropTypes.array.isRequired
  },
  render: function () {
    var list = this.props.feat.map(function (item) {
      console.log(item);
      return React.createElement(Movie, {
        key: item.id,
        movie: item
      });
    });
    return (React.createElement('div', {},
      React.createElement('h1', {}, 'Lista filmów'),
      React.createElement('ul', {}, list)
    ));
  }
});




var wrapper = React.createElement(MovieWrapper, {
  feat: movies
});





ReactDOM.render(wrapper, document.getElementById('app'));