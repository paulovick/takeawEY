import React from 'react';
import {
    StyleSheet,
    View,
    ImageBackground,
    Image,
    Text
} from 'react-native';
import Header from "../components/Header";
import {connect} from 'react-redux'
import {fetchProduct} from "../actions/homeActions";
import {IMAGES_BACKGROUND, IMAGES_HEADER} from "../constants";

class QRScreen extends React.Component {

    render() {
        return (
            <ImageBackground source = {IMAGES_BACKGROUND[this.props.product.id]} style={styles.container}>

                <Header topImg={IMAGES_HEADER[this.props.product.id]} height={"45%"}/>

                <View style={styles.absoluteContainer}>
                    <View style={styles.imageContainer}>
                        <ImageBackground
                            style={styles.image}
                            source={require('../Img/whiteWideButton.png')}>
                            <Text style={styles.line}>Pick up your {this.props.name} at:</Text>
                            <Text style={styles.hour}>11:30</Text>
                        </ImageBackground>
                    </View>
                </View>

                <View style={styles.qr}>
                    <Image source={require('../Img/qr.png')} />
                </View>

            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        width:  '100%',
        height: '100%',
        alignItems: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignContent:'center'
    },
    imageContainer: {
        width: '70%',
        aspectRatio: 1210/400,
        backgroundColor: 'transparent',
    },
    absoluteContainer:{
        alignItems:'center',
        elevation: 10,
        position: 'absolute',
        top: '35%',
        width: '100%',
        height: '30%',
    },
    qr: {
        position: 'absolute',
        bottom: '5%',
        width: '100%',
        justifyContent:'flex-end',
        backgroundColor: 'transparent',
        alignItems: 'center',
    },
    line:{
        width: '100%',
        height: '50%',
        backgroundColor: 'transparent',
        paddingTop: 15,
        color: 'rgba(150,150,150,1.0)',
        fontSize: 17,
        textAlign: 'center'
    },
    hour:{
        width: '100%',
        height: '50%',
        backgroundColor: 'transparent',
        color: '#000',
        fontSize: 35,
        textAlign: 'center',
        marginBottom: 15
    }
});

const mapStateToProps = (state, ownProps) => {
    return {
        product: ownProps.navigation.state.params
    }
}

const  mapDispatchToProps = (dispatch)=>{
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QRScreen)