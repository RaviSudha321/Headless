import apiRequest from "./apiRequests"

export async function homeData(){
    const query = {
        query: `query pageFields {
            page(id: "home", idType: URI) {
              homepageFields {
                bannerDescription
                bannerImage {
                  sourceUrl
                }
                bannerTitle
                bannerSubTitle
                bannerButtonText
                aboutButtonText
                aboutDescription
                aboutImage {
                  altText
                  sourceUrl
                }
                aboutSubTitle
                aboutTitle
              }
            }
          }`
    }

    const resJson = await apiRequest(query);
    const homePageData = await resJson.data.page.homepageFields;
    return homePageData;
}



export async function aboutData(){

  const query = {
    query: `query aboutFields {
      page(id: "about", idType: URI) {
        aboutPageFields {
          aboutButtonText
          aboutDescription
          aboutImage {
            altText
            sourceUrl
          }
          bannerTitle
          bannerDescription
          aboutTitle
          aboutSubTitle
        }
      }
    }`
  }

  const resJson = await apiRequest(query);
  const aboutPageData = await resJson.data.page.aboutPageFields;
  return aboutPageData;

}



export async function blogsData(){

  const query = {
    query: `query blogFields {
      page(id: "blogs", idType: URI) {
        id
        blogPageFields {
          bannerDescription
          bannerTitle
        }
      }
    }`
  }

  const resJson = await apiRequest(query);
  const blogsPageData = await resJson;
  return blogsPageData.data.page.blogPageFields;

}


export async function contactData(){

  const query = {
    query: `query contactFields {
      page(id: "contact", idType: URI) {
        contactPageFields {
          bannerDescription
          bannerTitle
        }
      }
    }`
  }

  const resJson = await apiRequest(query);
  const contactPageFields = await resJson.data.page.contactPageFields;
  return contactPageFields;

}



export async function optionData(){

  const query = {
    query: `query optionFields {
      themeOptions {
        optionFields {
          address
          emailAddress
          newsletterDescription
          newsletterTitle
          phoneNumber
          facebookLink
          instagramLink
          twitterLink
          footerDescription
          footerLogo {
            altText
            sourceUrl
          }
          headerLogo {
            altText
            sourceUrl
          }
          copyrightText
          notFoundTitle
          notFoundSubTitle
          notFoundDescription
        }
      }
    }`
  }

  const resJson = await apiRequest(query);
  const optionFields = await resJson;
  return optionFields.data.themeOptions.optionFields;

}