import { View, Text, Image } from "react-native";
import React from "react";
import { HStack, Box, Divider, Spacer } from "native-base";
import { clientProps } from "../../screens/home";
import { ClientCardStyles } from "../../styles/clientCardStyles";
import formatDate from "../../utils/formatDate";

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
  return (
    <View style={ClientCardStyles.cardContent}>
      <Box style={ClientCardStyles.imageBox}>
        <Image
          style={ClientCardStyles.clientImage}
          source={{ uri: picture.thumbnail }}
        />
      </Box>
      <Box style={ClientCardStyles.cardsDetails}>
        
        <Text style={ClientCardStyles.nameBox}>
          {name.first} {name.last}    ID: {id.value}
        </Text>
        <Text>
          Idade: {dob.age}    Data de Nascimento: {formatDate(new Date(dob.date))}{" "}
        </Text>
        <Text>
          Genêro: {gender}    E-mail: {email}    Telefone: {phone}
        </Text>
      </Box>
    </View>
  );
}
