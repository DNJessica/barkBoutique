import React from 'react';
import Portrait from '../images/portrait.jpg';
import Gallery from '../forms/AboutPhotoGallery';
import VideoGallery from '../forms/AboutVideoGallery';


class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeContentType: 'photo',
      isHover: 'none',
    };
  }

  handleContentTypeChange = (contentType) => {
    this.setState({
      activeContentType: contentType
    });
  };

  handleHoverChange = (contentType) => {
    this.setState({
      isHover: contentType
    });
  };

  render() {
    const { activeContentType, isHover } = this.state;

    return (
      <div>
        <div className="about-container">
          <div className="about-form">
            <div className="about-scroll">
              <div className="container">
                <div className="row">
                  <div className="col-sm-3">
                    <div className="portrait-container">
                      <img src={Portrait} className="portrait" alt="" />
                    </div>
                  </div>
                  <div className="col">
                    <div className="row">
                      <div className="col-12">
                        <h2 style={{fontFamily: 'Dancing Script'}}>About me</h2>
                      </div>
                      <div className="col-12 about-text">
                        <h4>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                          non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </h4>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <hr/>
              <div className="content-type-selector">
                <div class="row text-start">
                    <div class="col-md-1">
                        <h3
                        className="content-text"
                        onClick={() => this.handleContentTypeChange('photo')}
                        onMouseEnter={() => this.handleHoverChange('photo')}
                        onMouseLeave={() => this.handleHoverChange('none')}
                        style={{
                          fontFamily: 'Dancing Script, cursive',
                          fontWeight: activeContentType === 'photo' ? 'bold' : 'normal',
                          color: activeContentType === 'photo' ? 'var(--text-color)' : (isHover === 'photo' ? 'var(--hover-color)' : 'var(--container-color)'),
                          textDecoration: activeContentType === 'photo' ? 'underline' : 'none'
                      }}>
                            Photo
                        </h3>
                    </div>
                    <div class="col-md-11">
                        <h3
                        className="content-text"
                        onClick={() => this.handleContentTypeChange('video')}
                        onMouseEnter={() => this.handleHoverChange('video')}
                        onMouseLeave={() => this.handleHoverChange('none')}
                        style={{
                          fontFamily: 'Dancing Script, cursive',
                          fontWeight: activeContentType === 'video' ? 'bold' : 'normal',
                          color: activeContentType === 'video' ? 'var(--text-color)' : (isHover === 'video' ? 'var(--hover-color)' : 'var(--container-color)'),
                          textDecoration: activeContentType === 'video' ? 'underline' : 'none'
                      }}>
                            Video
                        </h3>
                    </div>
                </div>
              </div>
              <hr/>
              {activeContentType === 'photo' && (
                <Gallery/>
              )}
              {activeContentType === 'video' && (
                <VideoGallery/>
              )}
            </div>
            <div className="contact-container"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
