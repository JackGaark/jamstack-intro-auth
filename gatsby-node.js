exports.onCreatePage = ({ page, actions }) => {
  if (page.path.match(/^\/dashboard/)) {
    page.matchPatch = "/dashboard/*";
    actions.createPage(page);
  }
};
