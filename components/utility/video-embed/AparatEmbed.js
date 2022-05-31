import PropTypes from 'prop-types';
import React from 'react';
import './Video.module.css'

const AparatEmbad = ({ embedId }) => (
  <div className="video-responsive">
    <iframe
      width="853"
      height="480"
      src={`https://www.aparat.com/video/video/embed/videohash/${embedId}/vt/frame`}
      frameBorder="0"
      allowFullScreen="true"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      title="Embedded Aparat"
    />
  </div>
);

AparatEmbad.propTypes = {
  embedId: PropTypes.string.isRequired,
};

export default AparatEmbad;