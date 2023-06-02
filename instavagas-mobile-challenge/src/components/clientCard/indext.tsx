import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
} from "react-native";
import React, { useState, useCallback } from "react";
import {Box} from "native-base";
import { clientProps } from "../../screens/home";
import { ClientCardStyles } from "../../styles/clientCardStyles";
import formatDate from "../../utils/formatDate";
import CloseIcon from "react-native-vector-icons/AntDesign";
import { Colors } from "../../styles/colors";

export default function ClientCardComponent({
  picture,
  name,
  email,
  dob,
  gender,
  id,
  location,
  phone,
}: clientProps) {
  const [modalVisible, setModalVisible] = useState(false);

  const handleOpenModal = useCallback(() => {
    setModalVisible(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setModalVisible(false);
  }, []);

  

  const handlePressCloseIcon = useCallback(() => {
    handleCloseModal();
  }, []);

  return (
    <>
      <TouchableOpacity onPress={handleOpenModal}>
        <View style={ClientCardStyles.cardContent}>
          <Box style={ClientCardStyles.imageBox}>
            <Image
              style={ClientCardStyles.clientImage}
              source={{ uri: picture.thumbnail }}
            />
          </Box>
          <Box style={ClientCardStyles.cardsDetails}>
            <Text>
              <Text style={ClientCardStyles.nameBox}>
                {name.first} {name.last}
              </Text>{" "}
              ID: {id.value}
            </Text>
            <Text>
              <Text style={ClientCardStyles.textBold}>Idade:</Text> {dob.age}
              {"    "}
              <Text style={ClientCardStyles.textBold}>
                Data de Nascimento:
              </Text>{" "}
              {formatDate(new Date(dob.date))}{" "}
            </Text>
            <Text>
              <Text style={ClientCardStyles.textBold}>Genêro:</Text> {gender}
              {"   "}
              <Text style={ClientCardStyles.textBold}>Telefone:</Text> {phone}
            </Text>
          </Box>
        </View>
      </TouchableOpacity>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={handleCloseModal}
      >

        <View style={ClientCardStyles.modalBox}>
          <TouchableOpacity onPress={handlePressCloseIcon}>
            <View style={ClientCardStyles.closeIconModal}>
              <CloseIcon name="close" size={26} color={Colors.primary[900]} />
            </View>
          </TouchableOpacity>
          <Image
            style={ClientCardStyles.clientModalImage}
            source={{ uri: picture.medium }}
          />
          <Text style={ClientCardStyles.nameBox}>
            {name.first} {name.last}
          </Text>
          <Text>ID: {id.value}</Text>
          <View style={ClientCardStyles.modalTextBox}>
            <Text>
              <Text style={ClientCardStyles.textBold}>E-mail:</Text> {email}
              {"   "}
              {"\n"}
              <Text style={ClientCardStyles.textBold}>Data de Nascimento:</Text>
              {"  "}
              {formatDate(new Date(dob.date))}
              {"\n"}
              <Text style={ClientCardStyles.textBold}>Genêro:</Text> {gender}
              {"  "}
              {"\n"}
              <Text style={ClientCardStyles.textBold}>Telefone:</Text> {phone}
              {"\n"}
              <Text style={ClientCardStyles.textBold}>Nacionalidade:</Text>{" "}
              {location?.country}
              {"\n"}
              <Text style={ClientCardStyles.textBold}>Endereço:</Text>{" "}
              {location?.street.name} {location?.street.number}
            </Text>
          </View>
        </View>
      </Modal>
    </>
  );
}
