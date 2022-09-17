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

  return (
    <div className="container my-5">
      <Editor
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        localization={{
          locale: "ja",
        }}
      />
    </div>
  );
}
