import Dropzone from "react-dropzone";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function SelectProfilePicture() {
  return (
    <Dropzone onDrop={(acceptedFiles) => console.log(acceptedFiles)}>
      {({ getRootProps, getInputProps }) => (
        <div className="mt-6">
          <div {...getRootProps()}>
            {/* <input {...getInputProps()} /> */}
            <Avatar className="w-16 h-16 mx-auto cursor-pointer">
              <AvatarImage
                src="https://github.com/shadcn.png"
                alt="profile pic"
              />
              <AvatarFallback className="p-2">CN</AvatarFallback>
            </Avatar>
            <p className="text-center font-bold text-[12px] mt-2 cursor-pointer">
              Upload Profile Picture
            </p>
          </div>
        </div>
      )}
    </Dropzone>
  );
}

export default SelectProfilePicture;
