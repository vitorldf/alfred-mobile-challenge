import {
  Text,
  View,
  Image,
  StyleSheet,
  ActivityIndicator,
  SafeAreaView,
  FlatList,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { GlobalStyles } from "../../styles/globalStyles";
import { api } from "../../services";
import { Button, Box, VStack, Spinner } from "native-base";
import { useCallback, useEffect, useState } from "react";
import ClientCardComponent from "../../components/clientCard/indext";
import { ClientCardStyles } from "../../styles/clientCardStyles";
import { HomeStyles } from "../../styles/homeStyles";
import HeaderComponent from "../../components/header";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';

export interface clientProps {
  dob: {
    age: string;
    date: Date;
  };
  email?: string;
  gender?: string;
  id: {
    name: string;
    value: number;
  };
  location?: {
    city: string;
    country: string;
    postalCode: number;
    state: string;
    street?: {
      name: string;
      number: number;
    };
  };
  name: {
    first: string;
    last: string;
  };
  phone?: number;
  picture: {
    larger: string;
    medium: string;
    thumbnail: string;
  };
}

export default function HomePage() {
  const [userList, setUserList] = useState<clientProps[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const handleData = async () => {
    setIsLoading(true);
    try {
      const response = await api.get("/?results=1000");
      setUserList(response.data.results);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    handleData();
  }, []);

  const handleSearch = useCallback(
    (value: string) => {
      setSearchTerm(value);
      if (value.length > 0) {
        const filteredClientsList = userList?.filter((user) =>
          user.name.first.toLowerCase().includes(value.toLowerCase())
        );
        setUserList(filteredClientsList);
      } else {
        handleData(); // Retorna a lista completa quando o campo de pesquisa estiver vazio
      }
    },
    [userList]
  );

  return (
    <>
      <View>
        <HeaderComponent
          searchTerm={searchTerm}
          handleSearch={(e) => handleSearch(e)}
        />

        <SafeAreaView style={GlobalStyles.container}>
          {isLoading ? (
            <View style={HomeStyles.loaderContainer}>
              <Spinner size="large" color="blue" />
              <Text>Carregando dados dos Clientes.</Text>
            </View>
          ) : userList?.length ? (
            <FlatList
              data={userList}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({ item }) => (
                <VStack>
                  <Box style={HomeStyles.content}>
                    <ClientCardComponent
                      key={item.id.value}
                      id={item.id}
                      name={item.name}
                      picture={item.picture}
                      dob={item.dob}
                      gender={item.gender}
                      email={item.email}
                      phone={item.phone}
                    />
                  </Box>
                </VStack>
              )}
            />
          ) : null}
        </SafeAreaView>
      </View>
    </>
  );
}
