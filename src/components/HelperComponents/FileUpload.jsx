import React,{useState} from "react";
import "./FileUpload.css";
import { BsFillCloudUploadFill } from "react-icons/bs";
function FileUpload({ docs, onChange, inputId }) {
  console.log(docs);
  const [dragActive, setDragActive] = React.useState(false);
  const [previewImage, setPreviewImage] = useState(null);

  // ref
  const inputRef = React.useRef(null);

  const getFileTypeLogo = (extension) => {
    switch (extension) {
      case "pdf":
        // return <img src="/pdf-logo.png" alt="PDF Logo" />;
        return "pdf.jpg";
      case "doc":
      case "docx":
        return "doc.jpg";
      case "xls":
      case "xlsx":
        return "xls.jpg";
      case "exe":
        return "exe.jpg";
      case "png":
      case "jpg":
      case "jpeg":
        return "image.png";
      default:
        return "file.jpg";
    }
  };

  // handle drag events
  const handleDrag = function (e) {
    e.preventDefault();
    e.stopPropagation();
    // console.log({ eventType: e.type });
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  // triggers when file is dropped
  const handleDrop = function (e) {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      // handleFiles(e.dataTransfer.files);
      // console.log(e.dataTransfer);
      onChange({
        name: e.target.files[0].name,
        ext: e.target.files[0].name.split(".").pop(),
        logo: getFileTypeLogo(e.target.files[0].name.split(".").pop()),
      });
    }
  };

  // triggers when file is selected with click
  const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = ['Bytes', 'KB', 'MB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + ' ' + sizes[i];
  }
  const handleChange = async function (e) {
    e.preventDefault();
    // console.log({ logFile: e.target.files[0].document.ext });
   

  


    if (e.target?.files && e.target?.files[0]) {
      // handleFiles(e.target.files);
      // console.log(e.target.files);

      // onChange([...docs, {name:e.target.files[0].name,ext:e.target.files[0].name.split('.').pop()}]);
      const imageFile = e.target.files[0];
    let readerImage=""
      if(imageFile){
      const reader = await new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
        readerImage=reader.result
       
        onChange({
          name: e.target.files[0].name,
          ext: e.target.files[0].name.split(".").pop(),
          logo: getFileTypeLogo(e.target.files[0].name.split(".").pop()),
          image:readerImage,
          size:formatBytes(e.target.files[0].size)
        });
      };
  
      reader.readAsDataURL(imageFile);
    } else {
      setPreviewImage(null);
      readerImage=null
      onChange({
        name: e.target.files[0].name,
        ext: e.target.files[0].name.split(".").pop(),
        logo: getFileTypeLogo(e.target.files[0].name.split(".").pop()),
        image:readerImage
      });
    }
      
    }
  };

  // triggers the input when the button is clicked
  const onButtonClick = () => {
    inputRef.current.click();
  };
  return (
    <div>
      {" "}
      <form
        id="form-file-upload"
        onDragEnter={handleDrag}
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={inputRef}
          type="file"
          className="input-file-upload"
          // id="input-file-upload"
          accept="image/*"
          id={inputId}
          multiple={true}
          onChange={handleChange}
        />
        <label
          id="label-file-upload"
          htmlFor={inputId}
          className={dragActive ? "drag-active" : ""}
        >
          <div>
            <BsFillCloudUploadFill size={45} color="#00c08a" />
            <p className="color_apply">
              Drag and drop or{" "}
              <button className="upload-button" onClick={onButtonClick}>
                Browse
              </button>{" "}
              your Files <br />
              to start uploading{" "}
            </p>
          </div>
        </label>
        {dragActive && (
          <div
            id="drag-file-element"
            onDragEnter={handleDrag}
            onDragLeave={handleDrag}
            onDragOver={handleDrag}
            onDrop={handleDrop}
          ></div>
        )}
      </form>

    </div>
  );
}

export default FileUpload;
