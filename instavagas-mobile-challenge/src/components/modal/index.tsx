import React, { useState } from "react";
import { Modal, Button, Container, Text, View } from "native-base";

interface props {
  title: string;
  info: string;
}

export default function CustomModalComponent({ title, info }: props) {
  const MyModal = () => {
    const [modalVisible, setModalVisible] = useState(false);

    const openModal = () => {
      setModalVisible(true);
    };

    const closeModal = () => {
      setModalVisible(false);
    };
  };

  return (
    <Modal>
      <Modal.Content>
        <Button>
          <Text>{title}</Text>
        </Button>

        <Modal.Body>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <View style={{ backgroundColor: "#fff", padding: 20 }}>
              <Text>{info}</Text>
              <Button>
                <Text>Close</Text>
              </Button>
            </View>
          </View>
        </Modal.Body>
      </Modal.Content>
    </Modal>
  );
}
