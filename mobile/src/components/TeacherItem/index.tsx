import React from 'react';
import TeacherList from '../../pages/TeacherList';
import { View, Image, Text } from 'react-native';
import styles from './styles';
import { RectButton } from 'react-native-gesture-handler';

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png';
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png';
import whatsappIcon from '../../assets/images/icons/whatsapp.png';

function TeacherItem() {
    return (
        <View style={styles.container}>
            <View style={styles.profile}>
                <Image 
                    style={styles.avatar}
                    source={{ uri: 'https://github.com/vinicius-gandini.png' }}
                />

                <View style={styles.profileInfo}>
                    <Text style={styles.name}>Vinicius Gandini</Text>
                    <Text style={styles.subject}>Química</Text>
                </View>
            </View>

            <Text style={styles.bio}>
                sahdjhasdasjd hakjhda hdhaks kasas hdaskhdashdkajs hkashdsa dsa
                {'\n'}{'\n'}
                sadjkasjdaksjdasjdkasj kasl dasdl jasdjsa jda
            </Text>

            <View style={styles.footer}>
                <Text style={styles.price}>
                    Preço/Hora {'  '}
                    <Text style={styles.priceValue}>R$ 20,00</Text>
                </Text>

                <View style={styles.buttonContainer}>
                    <RectButton style={[styles.favoriteButton, styles.favorited]}>
                        {/*<Image source={heartOutlineIcon}/>*/}
                        <Image source={unfavoriteIcon}/>
                    </RectButton>

                    <RectButton style={styles.contactButton}>
                        <Image source={whatsappIcon}/>
                        <Text style={styles.contactButtonText}>Entrar em contato</Text>
                    </RectButton>
                </View>
            </View>
        </View>
    )
};

export default TeacherItem;