import json

#
# the purpose of this function is to clean up the response from the API and return a valid JSON string # re,ove the ````
#

response = '''```json
[
  {
    "Business_Idea": "General Small Business",
    "sector": "Multiple",
    "link": "https://www.seda.org.za/"
  },
  {
    "Business_Idea": "General Small Business",
    "sector": "Multiple",
    "link": "https://www.idc.co.za/"
  },
  {
    "Business_Idea": "Youth-Owned Businesses",
    "sector": "Multiple",
    "link": "https://www.nyda.gov.za/"
  },
  {
    "Business_Idea": "Women-Owned Businesses",
    "sector": "Multiple",
    "link": "https://www.nedbank.co.za/content/nedbank/southafrica/desktop/en/business/funding.html"
  },
  {
    "Business_Idea": "Agriculture",
    "sector": "Agriculture",
    "link": "https://www.landbank.co.za/"
  },
  {
    "Business_Idea": "Export-Oriented Businesses",
    "sector": "Manufacturing, Services, Agriculture",
    "link": "https://www.ecic.co.za/"
  },
  {
    "Business_Idea": "Startups and Early-Stage Businesses",
    "sector": "Multiple",
    "link": "https://www.businesspartners.co.za/"
  },
  {
    "Business_Idea": "General Small Businesses",
    "sector": "Multiple",
    "link": "https://www.fnb.co.za/business/funding/index.html"
  },
  {
    "Business_Idea": "General Small Businesses",
    "sector": "Multiple",
    "link": "https://www.standardbank.co.za/southafrica/personal/products-and-services/borrow/small-business-funding"
  },
  {
    "Business_Idea": "Small and Medium Enterprises (SMEs)",
    "sector": "Multiple",
    "link": "https://www.capitecbank.co.za/business/"
  },
    {
        "Business_Idea": "Impact Driven Startups",
        "sector": "Varied",
        "link": "https://villgro.com/"
    },
  {
    "Business_Idea": "Various Businesses - Microfinance",
    "sector": "Multiple",
    "link": "https://www.finclusion.africa/"
  },
    {
        "Business_Idea": "SMEs focused on Africa",
        "sector": "Multiple",
        "link": "https://www.afd.fr/en/nos-offres/financement-secteur-prive-en-afrique"
    },

  {
    "Business_Idea": "Businesses with social impact (Developing Countries)",
    "sector": "Multiple",
    "link": "https://www.responsAbility.com/"
  },
  {
    "Business_Idea": "Women Entrepreneurs (Developing Countries)",
    "sector": "Multiple",
    "link": "https://www.awif.pwc.com/"
  },
    {
        "Business_Idea": "For-Profit social enterprises (Africa focused)",
        "sector": "Multiple",
        "link": "https://www.africa-impact.com/"
    },
  {
        "Business_Idea": "Smallholder farmers",
        "sector": "Agriculture",
        "link": "https://agri3.com/"
  },
    {
      "Business_Idea": "General Small Business (International)",
      "sector": "Multiple",
      "link": "https://www.ifc.org/en/solutions/small-medium-enterprise-financing"
  }
]
```
'''

def fix_response(response):

    cleaned = response.replace('```json', '').replace('```', '').strip()
    json_response = json.loads(cleaned)
    return json.dumps(json_response, indent=4)

fix_response(response)