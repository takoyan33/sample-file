import React, { useCallback, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import { ContentState, convertToRaw, EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Home() {
  const [editorState, setEditorState] = useState();

  const uploadImageCallBack = useCallback(async (file) => {
    return await axios
      .post
      // fileをアップロードし、アップロード後の画像のurlを返す処理
      ()
      .then((response) => {
        return { data: { link: response } };
      })
      .catch((error) => {
        return error;
      });
  }, []);

  console.log(editorState);

  return (
    <div className="container my-5">
      <Editor
        editorState={editorState}
        onEditorStateChange={handleEditorStateChange}
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorStyle={{
          border: "solid 1px lightgray",
          padding: "5px",
          minHeight: editorMinHeight,
        }}
        localization={{ locale: "ja" }}
        toolbar={{
          options: ["inline", "blockType", "list", "link", "image", "history"],
          inline: {
            options: [
              "bold",
              "italic",
              "underline",
              "strikethrough",
              "monospace",
            ],
          },
          list: {
            options: ["unordered", "ordered"],
          },
          image: {
            uploadCallback: handleImageUpload,
            alt: { present: true, mandatory: true },
            previewImage: true,
          },
        }}
      />
    </div>
  );
}
