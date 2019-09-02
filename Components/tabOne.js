import React from "react";
import { Content, Card, CardItem } from "native-base";
import { View, Image } from "react-native";

function tabOne() {
  return (
    <Content padder>
      <Card>
        <CardItem header button onPress={() => alert("Don't Touch Me")}>
          <View>
            <Image
              style={{ width: 320, height: 500 }}
              source={{
                uri:
                  "https://pm1.narvii.com/6492/c78e8d5e27781e83a05aa4c94b7a8ca7e2d8be9d_hq.jpg"
              }}
            />
          </View>
        </CardItem>
      </Card>
      <Card>
        <CardItem header button onPress={() => alert("Don't Touch Me")}>
          <View>
            <Image
              style={{ width: 320, height: 500 }}
              source={{
                uri:
                  "https://vignette.wikia.nocookie.net/deathnote/images/9/95/Rules_VII.jpg/revision/latest?cb=20131223173251"
              }}
            />
          </View>
        </CardItem>
      </Card>
    </Content>
  );
}

export default tabOne;
