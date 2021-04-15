export default (context, inject) => {
  const langVM = {
    srcEditor: null,
    stdinEditor: null,
    isRunning: false,

    async run({ lang, stdin, src }) {
      this.isRunning = true;
      return await context.$axios
        .post(`http://localhost:3000/api/projects.json`, {
          project: {
            input: stdin + "+",
            source_files: [
              {
                filename: "Main.js",
                body: src,
                position: 0
              }
            ],
            language: lang,
            share: "private",
            network: true,
            output_type: null
          },
          run: true,
          save: true
        })
        .then(res => res.data)
        .catch(err => err)
        .finally(() => {
          this.isRunning = false;
        });
    }
  };

  inject("langVM", langVM);
  context.$langVM = langVM;
};
