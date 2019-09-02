import React from "react";
import {
  Container,
  Text,
  Content,
  List,
  ListItem,
  Icon,
  Footer,
  FooterTab,
  CheckBox
} from "native-base";

function tabTwo() {
  return (
    <Container>
      <Content>
        <List>
          <ListItem itemDivider>
            <Text>A</Text>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Text> Abdulghafoor Hajjieh</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>K</Text>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Text> Khaled Mohammed</Text>
          </ListItem>
          <ListItem itemDivider>
            <Text>N</Text>
          </ListItem>
          <ListItem>
            <CheckBox checked={false} />
            <Text> Nawaf Al Rifaie</Text>
          </ListItem>
        </List>
      </Content>
      <Footer>
        <FooterTab>
          <Text>
            If you would like to add anyone to the list, please contact +965
            99727217. Calls encouraged.
            <Icon type="AntDesign" name="smileo" />
          </Text>
        </FooterTab>
      </Footer>
    </Container>
  );
}

export default tabTwo;
