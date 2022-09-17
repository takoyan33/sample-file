import React, { useCallback, useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const Editor = dynamic(
  () => import("react-draft-wysiwyg").then((mod) => mod.Editor),
  { ssr: false }
);

import { ContentState, convertToRaw, EditorState } from "draft-js";

import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

export default function Home() {
  const [editorState, setEditorState] = useState("");

  const handleImageUpload = useCallback(async (file) => {
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
        toolbarClassName="toolbarClassName"
        wrapperClassName="wrapperClassName"
        editorClassName="editorClassName"
        editorStyle={{
          border: "solid 1px lightgray",
          padding: "5px",
        }}
        localization={{ locale: "ja" }}
      />
    </div>
  );
}
