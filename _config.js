var config = {}

// Update to have your correct username and password
config.mongoURI = {
    production: 'mongodb+srv://jmwasi:G4MqDLsMnTJqcde2@gallery.6oxp5fr.mongodb.net/darkroom?retryWrites=true&w=majority',
    development: 'mongodb+srv://jmwasi:G4MqDLsMnTJqcde2@gallery.6oxp5fr.mongodb.net/darkroom-dev?retryWrites=true&w=majority',
    test: 'mongodb+srv://jmwasi:G4MqDLsMnTJqcde2@gallery.6oxp5fr.mongodb.net/darkroom-test?retryWrites=true&w=majority',
}
module.exports = config;
