import TeamCard from "@/components/TeamCard";
import { Team } from "@/types/app";
import { useState } from "react";
import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { initialTeams} from "@/db/teams"


const TeamsScreen = () =>{
  
  const [teams, setTeams] = useState<Team[]>(initialTeams);

  const removeTeam = (team:Team) => {
    Alert.alert("Remove team", `Are you sure you want to remove ${team.name}?`, [
      { text: "Cancel"},
      {
        text: "Remove",
        onPress: () => setTeams(teams.filter(t=> t.id != team.id)),
      }

    ]);
  }

  return(
  <FlatList
    data={teams}
    keyExtractor={(team) => team.id.toString()}
    renderItem={({ item }) => (
      <TeamCard
        team={item}
        edit={() => console.log(`Editing ${item.name} (id: ${item.id})`)}
        remove={() => removeTeam(item)}
      />
    )}
    ListEmptyComponent={() => (
      <View style={styles.container}>
        <Text style={styles.text}>No teams found</Text>
      </View>
    )}
  /> 
  );
  
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginTop: 10,
  },
  text: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 24,
  }
})

export default TeamsScreen;