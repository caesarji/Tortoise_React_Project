import React, { Component } from 'react'

class ForImage extends Component {
    state = {
        profileImg: 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png'
    }
    imageHandler = (e) => {
        const reader = new FileReader();
        reader.onload = () => {
            if (reader.readyState === 2) {
                this.setState({
                    profileImg: reader.result
                })
            }
        }
        reader.readAsDataURL(e.target.files[0])

    }

    render() {
        const { profileImg } = this.state
        return (
            <div>
                <label for="imageInput">
                    <img src={profileImg} alt="" id="img" className="img" />
                    <h2 className="hide">Upload Image</h2>
                    {/* <span class="glyphicon glyphicon-folder-open" aria-hidden="true"></span> */}
                    <input type="file" name="image-upload" id="imageInput" accept="image/*" onChange={this.imageHandler} />
                </label>
            </div>
        )
    }
}

export default ForImage
