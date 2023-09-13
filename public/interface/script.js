tinymce.init({
  selector: "textarea#description",
  // width: `50%`,
  height: 300,
  plugins: [
    "advlist",
    "autolink",
    "link",
    "image",
    "lists",
    "charmap",
    "preview",
    "pagebreak",
    "searchreplace",
    "wordcount",
    "visualblocks",
    "code",
    "fullscreen",
    "insertdatetime",
    "media",
    "table",
    "emoticons",
    "template",
    "codesample",
  ],
  toolbar:
    "undo redo | styles | bold italic underline | alignleft aligncenter alignright |" +
    "bullist numlist outdent indent | link image | print prevew media fullscreen | " +
    "forecolor backcolor emoticons",
  menu: {
    favs: {
      title: "menu",
      items: "code visualaid | searchreplace | emoticons",
    },
  },
  menubar: "favs file edit insert format tools table",
  content_style: "body{font-family:Helvetica,Arial,sans-serif; font-size:16px}",
});
