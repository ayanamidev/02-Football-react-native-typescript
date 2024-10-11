import { Team } from "@/types/app";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

type TeamCardProps = {
  team: Team;
  edit: () => void;
  remove: () => void;
};

const TeamCard: React.FC<TeamCardProps> = ({ team, edit, remove }) => {
  const logo = team.logo
    ? { uri: team.logo }
    : require("@/assets/images/default-team-logo.png");

  return (
    <View style={styles.teamCard}>
      <Image source={logo} style={styles.logo} />
      <View style={styles.teamDetails}>
        <Text style={styles.teamName}>{team.name}</Text>
        <Text style={styles.text}>
          {team.location.city} ({team.location.country})
        </Text>
        <Text style={styles.text}>
          {team.stadium.capacity} ({team.stadium.capacity})
        </Text>
        <View style={styles.iconcontainer}>
          <Pressable onPress={edit}>
            {({ pressed }) => (
              <FontAwesome
                name="pencil"
                size={25}
                color="black"
                styles={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
          <Pressable onPress={remove}>
            {({ pressed }) => (
              <FontAwesome
                name="trash"
                size={25}
                color="black"
                styles={{ opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  teamCard: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 10,
    margin: 10,
    flexDirection: "row",
    gap: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  teamName: {
    fontWeight: "bold",
    fontSize: 15,
  },
  teamDetails: {
    gap: 10,
    width: "65%",
  },
  text: {
    fontSize: 12,
  },
  iconcontainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    gap: 20,
    marginTop: 10,
  },
  datacontainer: {},
});
export default TeamCard;
