var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) {if (window.CP.shouldStopExecution(1)){break;}if (window.CP.shouldStopExecution(1)){break;} var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); }
window.CP.exitedLoop(1);

window.CP.exitedLoop(1);
 } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Dummy data placeholder. Replace with array of actual data objects to come from Airtable 
var data = [{
  "project": "Project X",
  "stack": ["react", "express", "node"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  "needs": "People with super powers",
  "status": "In Development"
}, {
  "project": "Project XYZ",
  "stack": ["python", "django"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "needs": "People with super powers, semi-super powers, or no powers at all",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  "status": "Live"
}, {
  "project": "Project X",
  "stack": ["react", "express", "node"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  "needs": "People with super powers",
  "status": "In Development"
}, {
  "project": "Project XYZ",
  "stack": ["python", "django"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "needs": "People with super powers, semi-super powers, or no powers at all",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  "status": "Live"
}, {
  "project": "Project X",
  "stack": ["react", "express", "node"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/Sample%20Logo.png",
  "needs": "People with super powers",
  "status": "In Development"
}, {
  "project": "Project XYZ",
  "stack": ["python", "django"],
  "description": "Some sample text giving project elevator pitch and blah blah and other stuff and goals and dreams and rainbows and butterflies and sunshine. ",
  "website": "https://www.google.com",
  "github": "https://www.github.com",
  "needs": "People with super powers, semi-super powers, or no powers at all",
  "image": "https://s3-us-west-2.amazonaws.com/s.cdpn.io/326643/sample%20logo%202.png",
  "status": "Live"
}];

function Layout(props) {
  return React.createElement(
    "div",
    { className: "row" },
    props.children
  );
}

var Card = function (_React$Component) {
  _inherits(Card, _React$Component);

  function Card() {
    _classCallCheck(this, Card);

    return _possibleConstructorReturn(this, (Card.__proto__ || Object.getPrototypeOf(Card)).apply(this, arguments));
  }

  _createClass(Card, [{
    key: "render",
    value: function render() {
      var style = {
        img: {
          maxWidth: "400px"
        }
      };
      return React.createElement(
        "div",
        { className: "col m4" },
        React.createElement(
          "div",
          { className: "card hoverable" },
          React.createElement(
            "div",
            { className: "card-image waves-effect waves-block waves-light" },
            React.createElement("img", { style: style.img, className: "activator", src: this.props.data.image })
          ),
          React.createElement(
            "div",
            { className: "card-content" },
            React.createElement(
              "div",
              null,
              React.createElement(StackIcons, { data: this.props.data.stack })
            ),
            React.createElement(
              "span",
              { className: "card-title activator grey-text text-darken-4" },
              this.props.data.project,
              React.createElement(
                "i",
                { className: "material-icons right" },
                "more_vert"
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                null,
                React.createElement(
                  "a",
                  { href: this.props.data.website },
                  "Website"
                )
              ),
              React.createElement(
                "span",
                null,
                React.createElement(
                  "a",
                  { className: "github", href: this.props.data.github },
                  "Github"
                )
              )
            )
          ),
          React.createElement(
            "div",
            { className: "card-reveal" },
            React.createElement(
              "span",
              { className: "card-title grey-text text-darken-4" },
              this.props.data.project,
              React.createElement(
                "i",
                { className: "material-icons right" },
                "close"
              )
            ),
            React.createElement(
              "div",
              null,
              React.createElement(
                "span",
                { className: "status" },
                this.props.data.status
              )
            ),
            React.createElement(
              "p",
              null,
              this.props.data.description
            ),
            React.createElement(
              "p",
              null,
              React.createElement(
                "strong",
                null,
                "Need:"
              )
            ),
            React.createElement(
              "p",
              null,
              this.props.data.needs
            )
          )
        )
      );
    }
  }]);

  return Card;
}(React.Component);

// Note: Empty span tag on line 115 is there as placeholder for
// the custom CSS to inject text based on stack item.


function StackIcons(props) {
  var array = props.data;
  var icons = array.map(function (item) {
    return React.createElement(
      "div",
      { key: item, className: "icon" },
      React.createElement(
        "span",
        { className: item },
        React.createElement("span", null)
      )
    );
  });
  return React.createElement(
    "div",
    null,
    " ",
    icons,
    " "
  );
}

function Projects(props) {
  var projects = [];
  var data = props.data;
  data.forEach(function (item) {
    projects.push(React.createElement(Card, { data: item }));
  });
  return React.createElement(
    "div",
    null,
    projects
  );
}

ReactDOM.render(React.createElement(Layout, { children: React.createElement(Projects, { data: data }) }), document.getElementById('root'));