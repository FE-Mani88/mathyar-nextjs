import React, { useEffect, useState } from 'react';
import {
    Users,
    BarChart3,
    Settings,
    Bell,
    Search,
    Menu,
    Home,
    Package,
    MessageSquare,
    X,
    UserPlus,
    UserMinus,
    ShoppingCart,
    DollarSign,
    Clock,
    Mail,
    Phone,
    Shield,
    Key
} from 'lucide-react';
import Cookies from 'js-cookie';


const NavItem = ({ icon: Icon, text, isActive, onClick }) => (
    <a
        href="#"
        onClick={(e) => {
            e.preventDefault();
            onClick();
        }}
        className={`
      flex items-center gap-3 px-4 py-3 rounded-lg transition-colors
      ${isActive
                ? 'bg-blue-600 text-white'
                : 'text-gray-300 hover:bg-gray-800'
            }
    `}
    >
        <Icon className="h-5 w-5" />
        {text}
    </a>
);

const Sidebar = ({ isOpen, onClose, activeItem, setActiveItem }) => (
    <>
        {/* Mobile overlay */}
        {isOpen && (
            <div
                className="md:hidden fixed inset-0 bg-black bg-opacity-50 z-20"
                onClick={onClose}
            />
        )}

        {/* Sidebar */}
        <div className={`
      fixed inset-y-0 left-0 
      transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
      md:translate-x-0 transition-transform duration-200 ease-in-out
      flex flex-col w-64 bg-gray-900 text-white z-30
      overflow-hidden
    `}>
            <div className="flex-shrink-0 p-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <BarChart3 className="h-8 w-8 text-blue-500" />
                        <span className="text-xl font-bold">User Dashboard</span>
                    </div>
                    <button
                        onClick={onClose}
                        className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>

                <nav className="flex-1">
                    <ul className="space-y-2">
                        {[
                            { icon: Home, text: 'Dashboard', id: 'dashboard' },
                            { icon: Users, text: 'Users', id: 'users' },
                            { icon: Package, text: 'Quizzes', id: 'products' },
                            { icon: MessageSquare, text: 'Messages', id: 'messages' },
                            { icon: Settings, text: 'Settings', id: 'settings' },
                        ].map((item) => (
                            <li key={item.id}>
                                <NavItem
                                    icon={item.icon}
                                    text={item.text}
                                    isActive={activeItem === item.id}
                                    onClick={() => {
                                        setActiveItem(item.id);
                                        onClose();
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </div>
    </>
);

const StatCard = ({ icon: Icon, title, value, trend }) => (
    <div className="bg-white p-6 rounded-xl shadow-sm">
        <div className="flex items-center justify-between">
            <div>
                <p className="text-sm text-gray-500">{title}</p>
                <h3 className="text-2xl font-bold mt-1">{value}</h3>
            </div>
            <div className={`p-3 rounded-full ${trend > 0 ? 'bg-green-100' : 'bg-red-100'}`}>
                <Icon className={`h-6 w-6 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`} />
            </div>
        </div>
        <p className={`text-sm mt-2 ${trend > 0 ? 'text-green-600' : 'text-red-600'}`}>
            {trend > 0 ? '+' : ''}{trend}% from last month
        </p>
    </div>
);

const DashboardContent = ({ mainUser }) => (
    <>
        <div className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard Overview</h1>
            <p className="text-gray-600 mt-1">Welcome, {mainUser?.name}</p>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
            <StatCard icon={Users} title="Total Users" value="2,543" trend={12} />
            <StatCard icon={Package} title="Total Products" value="1,678" trend={8} />
            <StatCard icon={MessageSquare} title="Messages" value="832" trend={-3} />
            <StatCard icon={BarChart3} title="Revenue" value="$45,678" trend={24} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 py-3 border-b last:border-0">
                        <img
                            src={`https://images.unsplash.com/photo-${1500000000000 + index}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                            alt="User"
                            className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                        />
                        <div>
                            <p className="font-medium">User Activity {index + 1}</p>
                            <p className="text-sm text-gray-500">2 hours ago</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

const UsersContent = ({ users }) => {

    const [searchQuery, setSearchQuery] = useState('')

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    return (
        <>
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">User Management</h1>
                <p className="text-gray-600 mt-1">Manage your user base</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <StatCard icon={UserPlus} title="New Users" value="156" trend={8} />
                <StatCard icon={UserMinus} title="Churned Users" value="23" trend={-5} />
                <StatCard icon={Users} title="Active Users" value="1,893" trend={12} />
            </div>

            <div className="bg-white rounded-xl shadow-sm overflow-hidden">
                <div className="p-4 md:p-6">
                    <h2 className="text-lg font-semibold mb-4">Users List</h2>
                </div>
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center p-4">
                    <div className="w-full mx-auto">
                        <div className="relative group">
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
                            <div className="relative bg-white rounded-xl shadow-xl">
                                <div className="flex items-center p-4 !border-none">
                                    {/* <Search className="w-5 h-5 text-gray-400 flex-shrink-0" /> */}
                                    <input
                                        type="text"
                                        value={searchQuery}
                                        onChange={(event) => setSearchQuery(event.target.value)}
                                        placeholder="Search anything..."
                                        className="w-full px-4 py-2 text-gray-700 bg-transparent focus:!border-none focus:!outline-none !outline-none !border-none placeholder-gray-400"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full">
                        <thead className="bg-gray-50">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {filteredUsers?.map((user) => (
                                <tr>
                                    <td className="px-4 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user?.name}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user?.email}</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">Online</div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap">
                                        <div className="flex items-center">
                                            <div className="ml-4">
                                                <div className="text-sm font-medium text-gray-900">{user?.isAdmin ? 'Admin' : 'User'}</div>
                                            </div>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                {!filteredUsers.length ? <span className='flex justify-center mt-4 py-3 rounded-lg !bg-none text-xl'>User not found !</span> : null}
            </div>
        </>
    )
};

const ProductsContent = ({ quizzes }) => {

    const [searchQuery, setSearchQuery] = useState('')
    const [fixed, setFixed] = useState(null)
    const filteredQuizzes = quizzes?.filter(quiz => {
        return quiz.title.includes(searchQuery)
    })

    console.log(filteredQuizzes);


    return (
        <>
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Quizzes</h1>
                <p className="text-gray-600 mt-1">Manage your quizzes inventory</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <StatCard icon={Package} title="Total Products" value="1,678" trend={8} />
                <StatCard icon={ShoppingCart} title="Orders" value="892" trend={15} />
                <StatCard icon={DollarSign} title="Revenue" value="$45,678" trend={24} />
            </div>
            {/* search box */}
            <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-lg flex items-center p-4">
                <div className="w-full mx-auto">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 rounded-xl blur opacity-25 group-hover:opacity-40 transition duration-200"></div>
                        <div className="relative bg-white rounded-xl shadow-xl">
                            <div className="flex items-center p-4 !border-none">
                                {/* <Search className="w-5 h-5 text-gray-400 flex-shrink-0" /> */}
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(event) => setSearchQuery(event.target.value)}
                                    placeholder="Search anything..."
                                    className="w-full px-4 py-2 text-gray-700 bg-transparent focus:!border-none focus:!outline-none !outline-none !border-none placeholder-gray-400"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end search box */}
            <div className="flex flex-col gap-2">
                {/* {filteredQuizzes.map(quiz => (
                    <div className='px-3 py-3 text-white bg-[#2a3443] rounded-lg'>
                        <p className='gap-[2px] cxykh c0ayg c4wey cl6ef cf4pm cqbpd cxmkl c4aul c76qn'>{quiz.title}</p>
                        <p className='!mt-4'>Grade: {quiz.grade}</p>
                        <p>Difficultly: {quiz.difficulty}</p>
                        <p>Duration: {quiz.duration} Minute(s)</p>
                        <ul className='flex gap-2'>
                            <li>Topics: </li>
                            <li>{quiz.topics[0]},</li>
                            <li>{quiz.topics[1]},</li>
                            <li>{quiz.topics[2]}</li>
                        </ul>
                    </div>
                ))} */}
                {!filteredQuizzes.length ? <span className='flex mx-auto mt-4'>Quiz Not Found !</span> : null}
            </div>
        </>
    )
}

const MessagesContent = () => (
    <>
        <div className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Messages</h1>
            <p className="text-gray-600 mt-1">Manage your communications</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <StatCard icon={Mail} title="New Messages" value="48" trend={12} />
            <StatCard icon={Clock} title="Response Time" value="2.5h" trend={-15} />
            <StatCard icon={MessageSquare} title="Total Threads" value="832" trend={5} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">Recent Messages</h2>
            <div className="space-y-4">
                {[1, 2, 3, 4, 5].map((_, index) => (
                    <div key={index} className="flex items-center gap-3 md:gap-4 py-3 border-b last:border-0">
                        <img
                            src={`https://images.unsplash.com/photo-${1500000000000 + index}?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                            alt="User"
                            className="w-10 h-10 rounded-full"
                        />
                        <div className="flex-1">
                            <div className="flex justify-between items-start">
                                <p className="font-medium">John Doe</p>
                                <span className="text-sm text-gray-500">2h ago</span>
                            </div>
                            <p className="text-sm text-gray-600 mt-1">Lorem ipsum dolor sit amet, consectetur adipiscing elit...</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </>
);

const SettingsContent = () => (
    <>
        <div className="mb-6 md:mb-8">
            <h1 className="text-xl md:text-2xl font-bold text-gray-800">Settings</h1>
            <p className="text-gray-600 mt-1">Manage your preferences</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            <StatCard icon={Shield} title="Security Level" value="High" trend={0} />
            <StatCard icon={Key} title="API Keys" value="12" trend={20} />
            <StatCard icon={Users} title="Team Members" value="8" trend={0} />
        </div>

        <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
            <h2 className="text-lg font-semibold mb-4">General Settings</h2>
            <div className="space-y-6">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Site Name</label>
                    <input
                        type="text"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="AdminHub"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Contact Email</label>
                    <input
                        type="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="admin@example.com"
                    />
                </div>
                <div>
                    <label className="block text-sm font-medium text-gray-700">Timezone</label>
                    <select
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                    >
                        <option>UTC</option>
                        <option>EST</option>
                        <option>PST</option>
                    </select>
                </div>
                <div className="flex items-center justify-end">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                        Save Changes
                    </button>
                </div>
            </div>
        </div>
    </>
);

function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('dashboard');
    const [users, setUsers] = useState(null)
    const [mainUser, setMainUser] = useState(null)
    const [quizzes, setQuizzes] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('/api/users')
            const data = await res.json()
            setUsers(data)
            console.log(data);
        }

        fetchUsers()

        const fetchHandler = async () => {
            const res = await fetch('http://localhost:3000/api/quizzes')
            const quizzesData = await res.json()
            setQuizzes(quizzesData)
            // console.log(quizzesData)
        }

        fetchHandler()

        const getfromCookie = () => {
            const pureData = Cookies.get('user')
            let mainUser = JSON.parse(pureData)
            setMainUser(mainUser)
        }

        getfromCookie()

    }, [])


    const getContent = () => {
        switch (activeItem) {
            case 'dashboard':
                return <DashboardContent mainUser={mainUser} />;
            case 'users':
                return <UsersContent users={users} />;
            case 'products':
                return <ProductsContent quizzes={quizzes} />;
            case 'messages':
                return <MessagesContent />;
            case 'settings':
                return <SettingsContent />;
            default:
                return <DashboardContent mainUser={mainUser} />;
        }
    };

    if (mainUser?.isAdmin) {
        return (
            <div className="flex bg-gray-50 min-h-screen">
                <Sidebar
                    isOpen={isSidebarOpen}
                    onClose={() => setIsSidebarOpen(false)}
                    activeItem={activeItem}
                    setActiveItem={setActiveItem}
                />

                <div className="flex-1 flex flex-col md:pl-64">
                    {/* Header */}
                    <header className="bg-white shadow-sm sticky top-0 z-10">
                        <div className="flex items-center justify-between p-4">
                            <button
                                className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
                                onClick={() => setIsSidebarOpen(true)}
                            >
                                <Menu className="h-6 w-6" />
                            </button>

                            <div className="flex items-center gap-4 ml-auto">
                                {/* Search - Full width on mobile when active */}
                                <div className={`
                    ${isSearchOpen ? 'absolute inset-x-0 p-4 bg-white' : 'relative'} 
                    md:relative md:p-0
                  `}>
                                    {isSearchOpen && (
                                        <button
                                            className="absolute right-5 top-5 md:hidden"
                                            onClick={() => setIsSearchOpen(false)}
                                        >
                                            <X className="h-5 w-5" />
                                        </button>
                                    )}
                                </div>

                                {!isSearchOpen && (
                                    <button
                                        className="md:hidden p-2"
                                        onClick={() => setIsSearchOpen(true)}
                                    >
                                        <Search className="h-6 w-6 text-gray-600" />
                                    </button>
                                )}

                                <button className="relative p-2">
                                    <Bell className="h-6 w-6 text-gray-600" />
                                    <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
                                </button>

                                <img
                                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                                    alt="Profile"
                                    className="w-8 h-8 md:w-10 md:h-10 rounded-full"
                                />
                            </div>
                        </div>
                    </header>

                    {/* Main Content */}
                    <main className="flex-1 p-4 md:p-6 overflow-auto">
                        {getContent()}
                    </main>
                </div>
            </div>
        );

    } else {
        return <div>User dashboard</div>
    }
}

export default App;