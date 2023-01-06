import React from "react";

const initialStateItems = [
  {
    image: "https://media-thumbs.golden.com/ZmJ_IKu3lu990Y0AEMnTva3gPus=/200x200/smart/golden-media.s3.amazonaws.com%2Ftopic_images%2F9d7886fae3ed43b087619486434a7f95.jpeg",
    name: "Dan Abramov",
    description: "React core member",
    twitterLink: "https://twitter.com/dan_abramov"
  }
];

class Root extends React.Component {
  state = {
    items: [...initialStateItems],
  };

  addItem = e => {
    e.preventDefault();

    const newItem = {
      name: e.target[0].value,
      twitterLink: e.target[1].value,
      image: e.target[2].value,
      description: e.target[3].value
    };

    this.setState(prevState => ({
      items: [...prevState.items, newItem]
    }));

    e.target.reset();
  };

  render() {
    return (
      <div>
          <h1>Hello world</h1>
      </div>
    );
  }
}

export default Root;
