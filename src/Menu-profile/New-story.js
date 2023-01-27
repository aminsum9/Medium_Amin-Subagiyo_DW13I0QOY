import React from "react";
import NewStoryBar from "./New-story-bar";
import "./Profile.css";
import { TextField } from "@material-ui/core";
//Import Redux
import { connect } from "react-redux";
import { getCategories } from "../_actions/categories";
import { postArticle } from "../_actions/article";

const Newstory = (props) => {
  var [state, setState] = React.useState({
    title: "",
    content: "",
    category_id: "",
    image: { url: "", name: "", file: "" },
    imageFile: "",
    data: [],
  });

  const onChange = (e) => {
    const target = e.target.name;
    const value = e.target.value;

    setState(prevState => ({...prevState, [target]: value }));
  };

  const hiddenFileInput = React.useRef(null);

  const handleClick = (event) => {
    hiddenFileInput.current.click();
  };

  const handleFileChange = async (e) => {
    let files = e.target.files;
    const imageUrl = URL.createObjectURL(files[0]);

    let reader = new FileReader();
    reader.readAsDataURL(files[0]);

    reader.onload = (e) => {
      setState((prevState) => ({
        ...prevState,
        imageFile:  files[0],
        image: { file: files[0], url: imageUrl, name: files[0].name},
      }));
    };
  };

  const handleSaveStory = async () => {
    var formData = new FormData();

    formData.append('title', state.title)
    formData.append('content', state.content)
    formData.append('category_id', state.category_id)
    if(state.imageFile != ""){
      formData.append('image', state.imageFile)
    }

    props.postArticle(formData);
  };

  React.useEffect(() => {
    props.getCategories();
  }, []);

  const { categories } = props.categories;

  return (
    <div>
      <NewStoryBar postArticle={() => handleSaveStory()} />
      <div id="Section-content">
        <form id="form-add-story">
          <div
            style={{
              flexDirection: "row",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TextField
              id="new-story-title"
              label="Judul"
              multiline
              minRows="4"
              variant="outlined"
              name="title"
              onChange={onChange}
            />
            <div id="new-story-image">
              <img src={state.image.url} alt={state.image.name || "-"} />
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  handleClick(e);
                }}
              >
                {state.image.url ? (
                  <p style={{color: "red"}}>hapus gambar</p>
                ): (
                  <p style={{color: "green"}}>tambah gambar</p>
                )}
              </button>
              <input
                type="file"
                ref={hiddenFileInput}
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>
          <br></br>
          <div>
            <select
              id="new-story-select-category"
              name="category_id"
              onChange={onChange}
            >
              <option>pilih kategori</option>
              {categories.map((entry, index) => {
                return (
                  <option key={index} value={entry.id}>
                    {entry.name}
                  </option>
                );
              })}
            </select>
          </div>
          <br></br>
          <TextField
            id="new-story-add"
            label="Artikel"
            multiline
            minRows="10"
            variant="outlined"
            name="content"
            onChange={onChange}
          />
          <br></br>
        </form>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    categories: state.categories,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    postArticle: (data) => {
      dispatch(postArticle(data));
    },
    getCategories: () => {
      dispatch(getCategories());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Newstory);
