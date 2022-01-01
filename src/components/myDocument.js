
import React from 'react';
import { Document, Page, Text, View, Image, StyleSheet, Font } from '@react-pdf/renderer';
import profileImage from '../profile-image.jpg';


const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        fontSize: 14,
        padding: 20,
      },
      image: {
        marginBottom: 10,
        border:'5px solid white',
      },
      name: {
          fontSize: 28,
          fontWeight: 600,
          color: '#4956ba',
          fontFamily: 'Oswald',
          textTransform: 'uppercase',
          paddingLeft: 10,
      },
      jobtitle: {
          fontSize: 22,
          fontWeight: 600,
          fontFamily: 'Oswald',
          textTransform: 'uppercase',
          paddingLeft: 10,
          paddingBottom: 10,
      },
      sidebar: {
        width: '40%',
      },
      sidebarBox: {
        backgroundColor: '#222831',
        color: 'white',
        width: '90%',
        fontSize: 10,
        margin: '20px 10px',
        padding: 20,
        fontFamily: 'Open Sans',
        textAlign: 'center',
      },
      purpleBox: {
          backgroundColor: '#4956ba',
          color: 'white',
          padding: 10,
          fontSize: 12,
          textTransform: 'uppercase',
      },
      aboutme: {
        textAlign: 'justify',
        fontSize: 10,
        fontFamily: 'Open Sans',
        margin: '10px 0',
        paddingLeft: 10,
      },
      skills: {
        textAlign: 'justify',
        fontSize: 10,
        fontFamily: 'Open Sans',
        marginTop: 10,
        paddingLeft: 10,
      },
      main: {
        padding: 20,
        width: '60%',
      },
      year: {
          marginTop: 10,
          textAlign: 'right',
          fontSize: 10,
          fontFamily: 'Open Sans',
          paddingRight: 10,
      },
      jobname: {
        fontSize: 14,
        fontFamily: 'Oswald',
        textTransform: 'uppercase',
        paddingLeft: 10,
      },
      companyname: {
        paddingLeft: 10,
        fontSize: 14,
        color: '#4956ba',
        fontFamily: 'Oswald',
        textTransform: 'uppercase',
        paddingBottom: 10,
      },
      jobdescription: {
        paddingLeft: 10,
        fontSize: 10,
        fontFamily: 'Open Sans',
        marginBottom: 10,
      },
      education: {
        margin: '10px 0',
        paddingLeft: 10,
        fontSize: 10,
        fontFamily: 'Open Sans',
      },
      hobbiesinterests: {
        paddingLeft: 10,
        fontSize: 10,
        fontFamily: 'Open Sans',
      },

  });

  
Font.register({
    family: 'Oswald',
    src: 'https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf',
  });

Font.register({
    family: 'Open Sans',
    src: 'https://fonts.gstatic.com/s/opensans/v17/mem8YaGs126MiZpBA-UFVZ0e.ttf',
});

// Create Document Component
const MyDocument = ({formData}) =>  {
    
    const {
        name,
        mobile,
        address,
        email,
        website,
        aboutme,
        skills,
        latestjob,
        latestjobyear, 
        latestjobcompany,
        latestjobdescription,
        education,
        hobbiesinterests,
    } = formData;
    
    return (
    <Document>
      <Page width="100%" size="A4" style={styles.page}>
        <View style={styles.sidebar}>

            <View style={styles.sidebarBox}>
                <Image
                    src={profileImage}
                    style={styles.image}
                />
                {name && (<Text>{name}</Text>)}
                {address ? (<Text>{address}</Text>) : null}
                {mobile ? (<Text>{mobile}</Text>) : null}
                {website ? (<Text>Website: <a href={`https://${website}`}>{website}</a></Text>) : null}
                {email ? (<Text>{email}</Text>) : null}
            </View>

            <Text style={styles.purpleBox}>About Me</Text>
            {aboutme ? (<Text style={styles.aboutme} Break>{aboutme}</Text>) : null}

            <Text style={styles.purpleBox}>Skills</Text>
            {skills ? (<Text style={styles.skills} Break>{skills}</Text>) : null}
        </View>
        <View style={styles.main}>
            {name ? (<Text style={styles.name}>{name}</Text>) : null}
            {latestjob ? (<Text style={styles.jobtitle}>{latestjob}</Text>) : null}

            <Text style={styles.purpleBox}>Experience</Text>
            {latestjobyear ? (<Text style={styles.year}>{latestjobyear}</Text>) : null}
            {latestjob ? (<Text style={styles.jobname}>{latestjob}</Text>) : null}
            {latestjobcompany ? (<Text style={styles.companyname}>{latestjobcompany}</Text>) : null}
            {latestjobdescription ? (<Text style={styles.jobdescription}>{latestjobdescription}</Text>) : null}

            <Text style={styles.purpleBox}>Education</Text>
            {education ? (<Text style={styles.education} Break>{education}</Text>) : null}
            
            {hobbiesinterests ? (<Text style={styles.hobbiesinterests}>{hobbiesinterests}</Text>) : null }

        </View>
      </Page>
    </Document>
  )
};

export default MyDocument