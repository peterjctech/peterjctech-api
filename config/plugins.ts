module.exports = {
  upload: {
    config: {
      provider: "@strapi-community/strapi-provider-upload-google-cloud-storage",
      providerOptions: {
        bucketName: "peterjctech-api.appspot.com",
        publicFiles: false,
        uniform: false,
        basePath: "",
      },
    },
  },
};
