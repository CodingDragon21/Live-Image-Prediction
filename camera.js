import * as React from 'react';
import {Button, View, Image, Platform} from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import * as Permissions from 'expo-permissions';

export defualt class PickImage extends React.Component{

    state = {
        image:null,
        
    };
    render(){
        let{Image} = this.state;
        return(
            <View style = {{flex:1, alignItems: 'center', justifyContent: 'center'}}>
                <Button
                 title = 'Pick Image From Camera Roll'
                 onPress = {this._pickImage}
                />
            </View>
        )
    
        
    }

}

componentDidMount(){
    this.getPermissionAsync()
}

getPermissionAync = async() =>{
    if(Platform.OS !== 'web'){
        const{status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);
        if(status !== 'granted'){
            alert('Sorry We Need Camera Roll Permissions To Make This Work')
        }
    }
}

uploadImage = async(uri) =>{
    const data = new FormData();
    let fileName = uri.split('/')[uri.split('/').length-1]
    let type = `image/${uri.split('.')[uri.split('.').length-1]}`
    const fileToUpload = {
        uri: uri,
        name: fileName,
        type:type,
    }
    data.append('alphabet', fileToUpload)
}

