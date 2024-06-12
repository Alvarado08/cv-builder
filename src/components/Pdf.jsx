import {
  Document,
  Page,
  Text,
  StyleSheet,
  View,
  Svg,
  Path,
  Link,
} from "@react-pdf/renderer";

export default function Pdf({ person, theme, colors, experience }) {
  // Check which color object has the current theme tailwind class and return the hex value
  const classColor = colors.find((color) => color.class === theme);
  const textColor =
    theme === "bg-purple-500" || theme === "bg-blue-500" ? "white" : "#333C4D";
  const styles = StyleSheet.create({
    fonts: {
      fontFamily: "Times-Roman",
    },
    section: {
      padding: 28,
    },
    personalSection: {
      display: "flex",
      flexDirection: "column",
      backgroundColor: classColor.hex,
      color: textColor,
    },
    linksSection: {
      display: "flex",
      flexDirection: "row",
      gap: 12,
    },
    links: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      gap: 3,
    },
    experienceSection: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      gap: 12,
    },
    name: {
      fontSize: 26,
      fontStyle: "normal",
      fontWeight: "bold",
      paddingBottom: 12,
    },
    sectionTitle: {
      fontSize: 20,
      color: "#333C4D",
      marginBottom: 12,
    },
    experienceSpace: {
      marginBottom: 12,
    },
    experienceTitle: {
      fontSize: 15,
      color: "#333C4D",
    },
    educationTitle: {
      fontSize: 15,
      color: "#333C4D",
    },
    description: {
      fontSize: 12,
      color: "#333C4D",
    },
    date: {
      fontSize: 12,
      color: "#333C4D",
      fontWeight: "bold",
    },
  });
  return (
    <Document>
      <Page size="A4" style={styles.fonts}>
        <View style={[styles.personalSection, styles.section]}>
          <Text style={styles.name}>{person.general.name}</Text>
          <View style={styles.linksSection}>
            <View style={styles.links}>
              <Link
                src={`mailto:${person.general.email}`}
                style={{ textDecoration: "none" }}
              >
                <Text style={{ color: textColor, fontSize: 14 }}>
                  {person.general.email}
                </Text>
              </Link>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <Path d="M0 0h24v24H0z" stroke="none" fill="none" />
                <Path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                <Path d="M3 7l9 6l9 -6" />
              </Svg>
            </View>
            <View style={styles.links}>
              <Link
                src={person.general.linkedin}
                style={{ textDecoration: "none" }}
              >
                <Text style={{ color: textColor, fontSize: 14 }}>LinkedIn</Text>
              </Link>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <Path d="M0 0h24v24H0z" stroke="none" fill="none" />
                <Path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z" />
                <Path d="M8 11l0 5" />
                <Path d="M8 8l0 .01" />
                <Path d="M12 16l0 -5" />
                <Path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </Svg>
            </View>
            <View style={styles.links}>
              <Link
                src={person.general.website}
                style={{ textDecoration: "none" }}
              >
                <Text style={{ color: textColor, fontSize: 14 }}>Website</Text>
              </Link>
              <Svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="white"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <Path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <Path d="M19.5 7a9 9 0 0 0 -7.5 -4a8.991 8.991 0 0 0 -7.484 4" />
                <Path d="M11.5 3a16.989 16.989 0 0 0 -1.826 4" />
                <Path d="M12.5 3a16.989 16.989 0 0 1 1.828 4" />
                <Path d="M19.5 17a9 9 0 0 1 -7.5 4a8.991 8.991 0 0 1 -7.484 -4" />
                <Path d="M11.5 21a16.989 16.989 0 0 1 -1.826 -4" />
                <Path d="M12.5 21a16.989 16.989 0 0 0 1.828 -4" />
                <Path d="M2 10l1 4l1.5 -4l1.5 4l1 -4" stroke="white" />
                <Path d="M17 10l1 4l1.5 -4l1.5 4l1 -4" stroke="white" />
                <Path d="M9.5 10l1 4l1.5 -4l1.5 4l1 -4" stroke="white" />
              </Svg>
            </View>
          </View>
        </View>
        <View style={[styles.experienceSection, styles.section]}>
          <View>
            <Text style={styles.sectionTitle}>Experience</Text>
            {experience
              .sort(
                (a, b) => +b.endDate.split("-")[0] - +a.endDate.split("-")[0]
              )
              .sort((a, b) => (a.presentStatus ? -1 : b.presentStatus ? 1 : 0))
              .map((exp) => (
                <View style={styles.experienceSpace} key={exp.id}>
                  <Text style={styles.experienceTitle}>{exp.role}</Text>
                  <Text style={styles.description}>{exp.company}</Text>
                  <Text style={styles.date}>
                    {exp.startDate.split("-")[1]}/{exp.startDate.split("-")[0]}{" "}
                    -{" "}
                    {exp.presentStatus
                      ? "Present"
                      : `${exp.endDate.split("-")[1]}/${
                          exp.endDate.split("-")[0]
                        }`}
                  </Text>
                  <Text style={styles.description}>{exp.responsibility}</Text>
                </View>
              ))}
          </View>
          <View>
            <Text style={styles.sectionTitle}>Education</Text>
            <Text style={styles.educationTitle}>{person.education.major}</Text>
            <Text style={styles.description}>{person.education.school}</Text>
            <Text style={styles.date}>
              {person.education.startDate.split("-")[1]}/
              {person.education.startDate.split("-")[0]} -{" "}
              {person.education.presentStatus
                ? "Present"
                : `${person.education.endDate.split("-")[1]}/${
                    person.education.endDate.split("-")[0]
                  }`}
            </Text>
          </View>
        </View>
      </Page>
    </Document>
  );
}
