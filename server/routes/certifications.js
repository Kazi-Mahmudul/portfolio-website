const express = require('express');
const router = express.Router();

const certificationsData = {
  "categories": [
    {
      "id": "sql",
      "name": "SQL",
      "description": "Database Management & Queries",
      "icon": "https://i.postimg.cc/MZgHWGp6/klipartz-com.png",
      "count": 4,
      "certificates": [
        {
          "title": "Introduction to SQL",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/v8vgDZr3/Intro-to-SQL-Certificate-page-0001.jpg"
        },
        {
          "title": "Intermediate SQL",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/Y2V9vL4N/Intermediate-SQL-certificate-page-0001.jpg"
        },
        {
          "title": "Joining Data in SQL",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/VLCNnsMx/Joining-Data-in-SQL-certificate-page-0001.jpg"
        },
        {
          "title": "Data Manipulation in SQL",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/K8h8NXDR/Data-Manipulation-in-SQL-certificate-page-0001.jpg"
        }
      ]
    },
    {
      "id": "excel",
      "name": "Excel",
      "description": "Data Analysis & Visualization",
      "icon": "https://i.postimg.cc/4yH3zDBR/pngwing-com.png",
      "count": 4,
      "certificates": [
        {
          "title": "Introduction to Excel",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/6QyRsJFt/ex-intr-certificate-page-0001.jpg"
        },
        {
          "title": "Data Analysis in Excel",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/QCrWWBCd/excel-data-analysis-certificate-page-0001.jpg"
        },
        {
          "title": "Data Visualization in Excel",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/XqcBKVBc/excel-data-visualization-certificate-page-0001.jpg"
        },
        {
          "title": "Data Preparation in Excel",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/ncpDFQNd/data-prep-excel-certificate-page-0001.jpg"
        }
      ]
    },
    {
      "id": "powerbi",
      "name": "Power BI",
      "description": "Business Intelligence & Dashboards",
      "icon": "https://i.postimg.cc/1RV7ZbDm/Power-BI-300x300.png",
      "count": 5,
      "certificates": [
        {
          "title": "Introduction to Power BI",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/d0bhz78j/Introduction-to-Power-BI-certificate-page-0001.jpg"
        },
        {
          "title": "Data Preparation in Power BI",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/mkwhz8Km/Data-Preparation-in-Power-BI-certificate-page-0001.jpg"
        },
        {
          "title": "Data Connection in Power BI",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/MZbnFpX1/Data-Connections-in-Power-BI-Certificate-page-0001.jpg"
        },
        {
          "title": "Data Modeling in Power BI",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/FsT7hCyR/Data-Modeling-in-Power-BI-Certificate-page-0001.jpg"
        },
        {
          "title": "Data Visualization in Power BI",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/t477Jdkz/Data-Visualization-in-Power-BI-Certificate-page-0001.jpg"
        }
      ]
    },
    {
      "id": "python",
      "name": "Python",
      "description": "Programming & Data Science",
      "icon": "https://i.postimg.cc/Qx43X4bp/054441c0f2435a5ce541507e86f59fd5.png",
      "count": 4,
      "certificates": [
        {
          "title": "Introduction to Python",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/PJfF8H42/Introduction-to-Python-Certificate-page-0001.jpg"
        },
        {
          "title": "Intermediate Python",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/3NwnxB8q/Intermediate-Python-Certificate-page-0001.jpg"
        },
        {
          "title": "Data Manipulation with Pandas",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/W3Y0XPV9/Data-Manipulation-with-Pandas-Certificate-page-0001.jpg"
        },
        {
          "title": "Joining Data with Pandas",
          "provider": "DataCamp",
          "year": "2024",
          "image": "https://i.postimg.cc/rmsrdY45/Joining-Data-with-Pandas-page-0001.jpg"
        }
      ]
    }
  ]
};

// GET /api/certifications
router.get('/', (req, res) => {
  try {
    res.json(certificationsData);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching certifications data' });
  }
});

// GET /api/certifications/:categoryId
router.get('/:categoryId', (req, res) => {
  try {
    const { categoryId } = req.params;
    const category = certificationsData.categories.find(c => c.id === categoryId);
    
    if (!category) {
      return res.status(404).json({ message: 'Category not found' });
    }
    
    res.json(category);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching category data' });
  }
});

module.exports = router;