

   const employees = [ 
    {
        "id": "EMP001",
        "firstName": "Arjun",
        "email": "john.doe@company.com",
        "password": "123",
        "taskCount": {
          "active": 1,
          "newTask": 15,
          "completed": 1,
          "failed": 0,
          "total": 3
        },
        "tasks": [
          {
            "id": "TASK001",
            "title": "Q1 Sales Report",
            "description": "Prepare and submit Q1 sales performance analysis",
            "date": "2024-12-05",
            "category": "Reports",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK002",
            "title": "Client Meeting Preparation",
            "description": "Prepare presentation for ABC Corp meeting",
            "date": "2024-12-02",
            "category": "Meetings",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": "TASK003",
            "title": "Training Session",
            "description": "Conduct new employee orientation",
            "date": "2024-12-10",
            "category": "Training",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP002",
        "firstName": "Priya",
        "email": "sarah.smith@company.com",
        "password": "123",
        "taskCount": {
          "active": 2,
          "newTask": 2,
          "completed": 0,
          "failed": 1,
          "total": 4
        },
        "tasks": [
          {
            "id": "TASK004",
            "title": "Website Update",
            "description": "Update company website with new products",
            "date": "2024-12-03",
            "category": "Development",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK005",
            "title": "Bug Fixes",
            "description": "Fix reported issues in mobile app",
            "date": "2024-12-01",
            "category": "Development",
            "active": false,
            "newTask": false,
            "completed": false,
            "failed": true
          },
          {
            "id": "TASK006",
            "title": "Code Review",
            "description": "Review pull requests from team members",
            "date": "2024-12-04",
            "category": "Development",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK007",
            "title": "Documentation",
            "description": "Update API documentation",
            "date": "2024-12-06",
            "category": "Documentation",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP003",
        "firstName": "Rohit",
        "email": "michael.jones@company.com",
        "password": "123",
        "taskCount": {
          "active": 3,
          "newTask": 2,
          "completed": 1,
          "failed": 0,
          "total": 5
        },
        "tasks": [
          {
            "id": "TASK008",
            "title": "Marketing Campaign",
            "description": "Launch winter promotion campaign",
            "date": "2024-12-07",
            "category": "Marketing",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK009",
            "title": "Social Media Content",
            "description": "Create content calendar for December",
            "date": "2024-12-02",
            "category": "Marketing",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": "TASK010",
            "title": "Analytics Report",
            "description": "Analyze November social media performance",
            "date": "2024-12-05",
            "category": "Reports",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK011",
            "title": "Email Newsletter",
            "description": "Design and send monthly newsletter",
            "date": "2024-12-08",
            "category": "Marketing",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK012",
            "title": "Customer Survey",
            "description": "Create and distribute satisfaction survey",
            "date": "2024-12-09",
            "category": "Customer Relations",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP004",
        "firstName": "Neha",
        "email": "lisa.wilson@company.com",
        "password": "123",
        "taskCount": {
          "active": 3,
          "newTask": 1,
          "completed": 1,
          "failed": 0,
          "total": 4
        },
        "tasks": [
          {
            "id": "TASK013",
            "title": "Budget Planning",
            "description": "Prepare 2025 department budget",
            "date": "2024-12-15",
            "category": "Finance",
            "active": true,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK014",
            "title": "Expense Reports",
            "description": "Review and approve team expenses",
            "date": "2024-12-03",
            "category": "Finance",
            "active": false,
            "newTask": false,
            "completed": true,
            "failed": false
          },
          {
            "id": "TASK015",
            "title": "Vendor Payments",
            "description": "Process pending vendor payments",
            "date": "2024-12-04",
            "category": "Finance",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK016",
            "title": "Financial Report",
            "description": "Generate monthly financial statement",
            "date": "2024-12-06",
            "category": "Reports",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      },
      {
        "id": "EMP005",
        "firstName": "Aditya",
        "email": "david.brown@company.com",
        "password": "123",
        "taskCount": {
          "active": 3,
          "newTask": 2,
          "completed": 0,
          "failed": 0,
          "total": 5
        },
        "tasks": [
          {
            "id": "TASK017",
            "title": "Inventory Check",
            "description": "Complete monthly inventory audit",
            "date": "2024-12-05",
            "category": "Operations",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK018",
            "title": "Safety Training",
            "description": "Conduct warehouse safety training",
            "date": "2024-12-08",
            "category": "Training",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK019",
            "title": "Equipment Maintenance",
            "description": "Schedule quarterly equipment maintenance",
            "date": "2024-12-10",
            "category": "Operations",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK020",
            "title": "Supplier Meeting",
            "description": "Annual review with key suppliers",
            "date": "2024-12-12",
            "category": "Meetings",
            "active": false,
            "newTask": true,
            "completed": false,
            "failed": false
          },
          {
            "id": "TASK021",
            "title": "Shipping Report",
            "description": "Analyze shipping efficiency metrics",
            "date": "2024-12-07",
            "category": "Reports",
            "active": true,
            "newTask": false,
            "completed": false,
            "failed": false
          }
        ]
      }
    ]
  

  const admin = [
    {
        "id":1,
        "email":"admin@example.com",
        "password":"123"
    }
  ];

  export const setLocalStorage = () =>{
    localStorage.setItem('employees',JSON.stringify(employees))
    localStorage.setItem('admin',JSON.stringify(admin))
  }

  export const getLocalStorage = () =>{
    const employees = JSON.parse(localStorage.getItem('employees'))
    const admin = JSON.parse(localStorage.getItem('admin'))
    return {employees,admin}
    
  }