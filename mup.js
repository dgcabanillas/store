module.exports = {
  servers: {
    one: {
      // TODO: set host address, username, and authentication method
      host: 'ec2-52-37-21-197.us-west-2.compute.amazonaws.com',
      username: 'ubuntu',
      pem: '../DgccInstance.pem'
      // password: 'server-password'
      // or neither for authenticate from ssh-agent
    }
  },

  meteor: {
    // TODO: change app name and path
    name: 'store',
    path: '../store',

    servers: {
      one: {},
    },

    buildOptions: {
      serverOnly: true,
    },

    env: {
      // TODO: Change to your app's url
      // If you are using ssl, it needs to start with https://
      ROOT_URL: 'http://ec2-52-37-21-197.us-west-2.compute.amazonaws.com',
      MONGO_URL: 'mongodb://179.7.155.97/meteor',
    },

    // ssl: { // (optional)
    //   // Enables let's encrypt (optional)
    //   autogenerate: {
    //     email: 'email.address@domain.com',
    //     // comma seperated list of domains
    //     domains: 'website.com,www.website.com'
    //   }
    // },

    docker: {
      // change to 'kadirahq/meteord' if your app is not using Meteor 1.4 -- abernix/meteord:base
      image: 'kadirahq/meteord',
      // imagePort: 80, // (default: 80, some images EXPOSE different ports)
    },

    // This is the maximum time in seconds it will wait
    // for your app to start
    // Add 30 seconds if the server has 512mb of ram
    // And 30 more if you have binary npm dependencies.
    deployCheckWaitTime: 60,

    // Show progress bar while uploading bundle to server
    // You might need to disable it on CI servers
    enableUploadProgressBar: true
  },

  mongo: {
    port: 3001,
    version: '3.2.12',
    servers: {
      one: {}
    }
  }
};
