import React from 'react';
import PropTypes from 'prop-types';
import {is} from 'gm-util';
import classNames from 'classnames';

class Uploader extends React.Component {
    handleUpload = (e) => {
        e.preventDefault();

        const {multiple, onUpload} = this.props;

        const droppedFiles = e.dataTransfer ? e.dataTransfer.files : e.target.files;
        const max = multiple ? droppedFiles.length : 1;
        const files = [];

        for (let i = 0; i < max; i++) {
            const file = droppedFiles[i];
            file.preview = window.URL.createObjectURL(file);
            files.push(file);
        }

        onUpload(files, e);
    };

    handleClick = () => {
        this.refInput.value = null;
        this.refInput.click();
    };

    render() {
        const {
            className,
            children,
            accept,
            multiple,
            onUpload, // eslint-disable-line
            ...rest
        } = this.props;

        return (
            <div
                {...rest}
                className={classNames("gm-uploader", className)}
            >
                <div
                    className="gm-uploader-box"
                    onClick={this.handleClick}
                    onDrop={this.handleUpload}
                >{children || (
                    <div className="gm-uploader-default-box">
                        +
                    </div>
                )}</div>
                <input
                    type="file"
                    ref={ref => this.refInput = ref}
                    className="gm-uploader-input"
                    accept={accept}
                    multiple={!is.weixin() && multiple}
                    onChange={this.handleUpload}
                />
            </div>
        );
    }
}

Uploader.defaultProps = {
    multiple: false
};

Uploader.propTypes = {
    onUpload: PropTypes.func.isRequired,
    multiple: PropTypes.bool,
    accept: PropTypes.string,
    className: PropTypes.string
};

export default Uploader;
