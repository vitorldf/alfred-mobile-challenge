import { Text, View, SafeAreaView, FlatList } from "react-native";
import { GlobalStyles } from "../../styles/globalStyles";
import { api } from "../../services";
import { Box, VStack, Progress } from "native-base";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import ClientCardComponent from "../../components/clientCard/indext";
import { ClientCardStyles } from "../../styles/clientCardStyles";
import { HomeStyles } from "../../styles/homeStyles";
import HeaderComponent from "../../components/header";
import {
  BottomSheetModalProvider,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";

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
    street: {
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
      const response = await api.get("/?results=50");
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
        handleData();
      }
    },
    [userList]
  );

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const snapPoints = useMemo(() => ["25%", "50%"], []);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  return (
    <>
      <View style={GlobalStyles.container}>
        <HeaderComponent
          searchTerm={searchTerm}
          handleSearch={(e) => handleSearch(e)}
        />

        <SafeAreaView style={GlobalStyles.container}>
          {isLoading ? (
            <View style={HomeStyles.loaderContainer}>
              <Text style={HomeStyles.loaderText}>
                Carregando dados dos Clientes.
              </Text>
              <Progress
                w="300"
                colorScheme="warning"
                shadow={2}
                value={80}
                mx="4"
              />
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
                      location={item.location}
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
