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
// import fs from 'fs'
// import path from 'path';


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
                ? 'bg-blue-600 text-white transition-all duration-300'
                : 'text-gray-300 hover:bg-gray-800 transition-all duration-300'
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
                className="md:!hidden fixed inset-0 z-20 transition-all duration-300"
                onClick={onClose}
            />
        )}

        {/* Sidebar */}
        <div className={`
      fixed inset-y-0 left-0 
      transform ${isOpen ? '!translate-x-0' : '!hidden w-full sm:!flex !-translate-x-full'} 
      md:!translate-x-0 transition-transform !duration-200 ease-in-out
      flex flex-col !w-64 bg-gray-900 text-white !z-30
      !overflow-hidden
    `}>
            <div className="flex-shrink-0 p-6">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-3">
                        <BarChart3 className="h-8 w-8 text-blue-500" />
                        <span className="text-xl font-bold">Admin Dashboard</span>
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
                            { icon: Settings, text: 'Add Quiz', id: 'settings' },
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

const SuccessModal = ({ isOpen, message, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-green-100 rounded-full p-3">
                        <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                </div>
                <p className="text-center text-gray-700 mb-4">{message}</p>
                <button
                    onClick={onClose}
                    className="w-full !mt-2 !bg-green-500 !text-white !py-2 !px-4 !rounded-lg hover:!bg-green-600 !transition-colors"
                >
                    تایید
                </button>
            </div>
        </div>
    );
};

const ConfirmModal = ({ isOpen, onClose, onConfirm, userName }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
            <div className="relative bg-white rounded-lg p-6 max-w-sm w-full mx-4 shadow-xl">
                <div className="flex items-center justify-center mb-4">
                    <div className="bg-red-100 rounded-full p-3">
                        <svg className="h-6 w-6 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                        </svg>
                    </div>
                </div>
                <h3 className="text-lg font-medium text-gray-900 text-center mb-2">حذف کاربر</h3>
                <p className="text-center text-gray-500 mb-4 rtl">
                    آیا از حذف کاربر <span className="font-bold text-gray-700">{userName}</span> مطمئن هستید؟
                </p>
                <div className="flex gap-3 mt-6">
                    <button
                        onClick={onConfirm}
                        className="flex-1 !bg-red-500 !text-white !py-2 !px-4 !rounded-lg hover:!bg-red-600 !transition-colors"
                    >
                        بله، حذف شود
                    </button>
                    <button
                        onClick={onClose}
                        className="flex-1 !bg-gray-200 !text-gray-800 !py-2 !px-4 !rounded-lg hover:!bg-gray-300 !transition-colors"
                    >
                        انصراف
                    </button>
                </div>
            </div>
        </div>
    );
};

const DashboardContent = ({ mainUser }) => {
    const [users, setUsers] = useState(null)
    const [quizzes, setQuizzes] = useState(null)

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('/api/users')
            const data = await res.json()
            if (users) {
                return false
            } else {
                setUsers(data)
            }
            // console.log(data);
        }

        fetchUsers()

        const fetchQuizzes = async () => {
            const res = await fetch('/api/quizzes')
            const data = await res.json()
            if (quizzes) {
                return false
            } else {
                setQuizzes(data)
            }
        }

        fetchQuizzes()
    })

    return (
        <>
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard Overview</h1>
                <p className="text-gray-600 mt-1">Welcome, {mainUser?.name}</p>

            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-6 md:mb-8">
                <StatCard icon={Users} title="Total Users" value={users?.length} trend={12} />
                <StatCard icon={Package} title="Total Quizzes" value={quizzes?.length} trend={8} />
                <StatCard icon={MessageSquare} title="Messages" value="832" trend={-3} />
                <StatCard icon={BarChart3} title="Revenue" value="$45,678" trend={24} />
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                <h2 className="text-lg font-semibold mb-4">Our First Users</h2>
                <div className="space-y-4">
                    {users?.filter(user => user?.isAdmin === false).slice(0, 3).map((user, index) => (
                        <div key={index} className="flex items-center gap-3 md:gap-4 py-3 border-b last:border-0 bg-gray-100 rounded-lg px-4">
                            <div>
                                <p className="font-medium">{user.name}</p>
                                <p className="text-sm text-gray-500">Offline</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-4 md:p-6">
                <h2 className="text-lg font-semibold mb-4">Our First Quizzes</h2>
                <div className="space-y-4">
                    {quizzes?.slice(0, 3).map((quiz, index) => (
                        <div key={index} className="flex items-center gap-3 md:gap-4 py-3 border-b last:border-0 bg-gray-100 rounded-lg px-4">
                            <div>
                                <p className="font-medium">{quiz.title}</p>
                                <p className="text-sm text-gray-500">Time: {quiz.duration} Minute(s)</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
};

const UsersContent = ({ users: initialUsers }) => {
    const [searchQuery, setSearchQuery] = useState('')
    const [users, setUsers] = useState(initialUsers)
    const [showSuccessModal, setShowSuccessModal] = useState(false)
    const [showConfirmModal, setShowConfirmModal] = useState(false)
    const [userToDelete, setUserToDelete] = useState(null)

    const filteredUsers = users.filter(user => {
        return user.name.toLowerCase().includes(searchQuery.toLowerCase())
    })

    const handleDeleteClick = (user) => {
        setUserToDelete(user)
        setShowConfirmModal(true)
    }

    const handleConfirmDelete = async () => {
        if (!userToDelete) return

        try {
            const res = await fetch(`/api/users/${userToDelete._id}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: userToDelete._id })
            })

            if (res.ok) {
                // Update local state immediately after successful deletion
                setUsers(prevUsers => prevUsers.filter(user => user._id !== userToDelete._id))
                // Show success modal
                setShowSuccessModal(true)
            } else {
                console.error('Failed to delete user')
            }
        } catch (error) {
            console.error('Error deleting user:', error)
        } finally {
            // Close confirm modal and clear userToDelete
            setShowConfirmModal(false)
            setUserToDelete(null)
        }
    }

    return (
        <>
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">User Management</h1>
                <p className="text-gray-600 mt-1">Manage your users bases</p>
            </div>

            {/* Success Modal */}
            <SuccessModal
                isOpen={showSuccessModal}
                message="کاربر با موفقیت حذف شد"
                onClose={() => setShowSuccessModal(false)}
            />

            {/* Confirm Modal */}
            <ConfirmModal
                isOpen={showConfirmModal}
                onClose={() => {
                    setShowConfirmModal(false)
                    setUserToDelete(null)
                }}
                onConfirm={handleConfirmDelete}
                userName={userToDelete?.name}
            />

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
                                <tr className='!w-full !min-w-100px'>
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
                                    {!user?.isAdmin && (
                                        <button
                                            className='!px-2 !py-1 !bg-red-500 !text-white !rounded-md hover:!bg-red-700 !transition-all !duration-300'
                                            onClick={() => handleDeleteClick(user)}
                                        >
                                            حذف
                                        </button>
                                    )}
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

    console.log('props: ', quizzes);


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
                {filteredQuizzes?.map(quiz => (
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
                ))}
                {!filteredQuizzes?.length ? <span className='flex mx-auto mt-4'>Quiz Not Found !</span> : null}
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

const SettingsContent = () => {
    const handleCreateQuiz = async (e) => {
        e.preventDefault();
        
        const addNewQuiz = {
            id: e.target.id.value || undefined,
            title: e.target.title.value,
            imageUrl: e.target.imageUrl.value,
            description: e.target.description.value,
            difficulty: e.target.difficulty.value,
            grade: e.target.grade.value,
            duration: e.target.duration.value,
            topics: [
                e.target.topic1.value,
                e.target.topic2.value,
                e.target.topic3.value
            ]
        }

        const res = await fetch('/api/quizzes', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(addNewQuiz)
        })

        // console.log(await res.json());
        
        
        console.log('New Quiz Data:', addNewQuiz);
    };

    return (
        <>
            <div className="mb-6 md:mb-8">
                <h1 className="text-xl md:text-2xl font-bold text-gray-800">Add Quiz</h1>
                <p className="text-gray-600 mt-1">Create a new quiz</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
                <StatCard icon={Shield} title="Total Quizzes" value="25" trend={10} />
                <StatCard icon={Key} title="Active Quizzes" value="18" trend={5} />
                <StatCard icon={Users} title="Quiz Participants" value="156" trend={15} />
            </div>

            <form onSubmit={handleCreateQuiz} className="space-y-8">
                {/* Quiz General Information */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Quiz Information</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quiz ID</label>
                            <input
                                type="text"
                                name="id"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter Quiz ID"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quiz Title</label>
                            <input
                                type="text"
                                name="title"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter quiz title..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quiz Image URL</label>
                            <input
                                type="url"
                                name="imageUrl"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter image URL..."
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Quiz Description</label>
                            <input
                                type="text"
                                name="description"
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter Quiz Description..."
                            />
                        </div>

                        {/* Topics Section */}
                        <div className="col-span-1 md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-2">Topics</label>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <div>
                                    <input
                                        type="text"
                                        name="topic1"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="First Topic"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="topic2"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Second Topic"
                                    />
                                </div>
                                <div>
                                    <input
                                        type="text"
                                        name="topic3"
                                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                        placeholder="Third Topic"
                                    />
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Difficulty Level</label>
                            <select
                                name="difficulty"
                                required
                                defaultValue=""
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option value="" disabled>Select difficulty</option>
                                <option value="easy">Easy</option>
                                <option value="medium">Medium</option>
                                <option value="hard">Hard</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Grade</label>
                            <select
                                name="grade"
                                required
                                defaultValue=""
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                            >
                                <option value="" disabled>Select grade</option>
                                <option value="7">Seventh Grade</option>
                                <option value="8">Eighth Grade</option>
                                <option value="9">Ninth Grade</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Duration (minutes)</label>
                            <input
                                type="number"
                                name="duration"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Enter duration..."
                                min="1"
                            />
                        </div>
                    </div>
                </div>

                {/* Questions Section */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">First Question</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-lg font-medium text-gray-800 mb-2">Question</label>
                            <textarea
                                name="question1"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                                placeholder="Enter your question here..."
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 1</label>
                                <input
                                    type="text"
                                    name="q1option1"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 2</label>
                                <input
                                    type="text"
                                    name="q1option2"
                                    //  required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 3</label>
                                <input
                                    type="text"
                                    name="q1option3"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 4</label>
                                <input
                                    type="text"
                                    name="q1option4"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Second Question */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Second Question</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-lg font-medium text-gray-800 mb-2">Question</label>
                            <textarea
                                name="question2"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                                placeholder="Enter your question here..."
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 1</label>
                                <input
                                    type="text"
                                    name="q2option1"
                                    //required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 2</label>
                                <input
                                    type="text"
                                    name="q2option2"
                                    //  required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 3</label>
                                <input
                                    type="text"
                                    name="q2option3"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 4</label>
                                <input
                                    type="text"
                                    name="q2option4"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Third Question */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Third Question</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-lg font-medium text-gray-800 mb-2">Question</label>
                            <textarea
                                name="question3"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                                placeholder="Enter your question here..."
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 1</label>
                                <input
                                    type="text"
                                    name="q3option1"
                                    //  required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 2</label>
                                <input
                                    type="text"
                                    name="q3option2"
                                    //      required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 3</label>
                                <input
                                    type="text"
                                    name="q3option3"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 4</label>
                                <input
                                    type="text"
                                    name="q3option4"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fourth Question */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Fourth Question</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-lg font-medium text-gray-800 mb-2">Question</label>
                            <textarea
                                name="question4"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                                placeholder="Enter your question here..."
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 1</label>
                                <input
                                    type="text"
                                    name="q4option1"
                                    //required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 2</label>
                                <input
                                    type="text"
                                    name="q4option2"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 3</label>
                                <input
                                    type="text"
                                    name="q4option3"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 4</label>
                                <input
                                    type="text"
                                    name="q4option4"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Fifth Question */}
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <h2 className="text-lg font-semibold mb-4 text-gray-800">Fifth Question</h2>
                    <div className="space-y-6">
                        <div className="border-b pb-4">
                            <label className="block text-lg font-medium text-gray-800 mb-2">Question</label>
                            <textarea
                                name="question5"
                                // required
                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 min-h-[100px]"
                                placeholder="Enter your question here..."
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 1</label>
                                <input
                                    type="text"
                                    name="q5option1"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 2</label>
                                <input
                                    type="text"
                                    name="q5option2"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 3</label>
                                <input
                                    type="text"
                                    name="q5option3"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Option 4</label>
                                <input
                                    type="text"
                                    name="q5option4"
                                    // required
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        type="submit"
                        className="!flex !justify-center !text-center !mx-auto !bg-blue-600 !text-white !px-8 !py-2 !rounded-lg hover:!bg-blue-700 transition-colors"
                    >
                        ساخت آزمون
                    </button>
                </div>
            </form>
        </>
    );
};

function App({ data }) {
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

        const fetchQuizzes = async () => {
            const res = await fetch('/api/quizzes')
            const quizzesData = await res.json()
            console.log('mongo ', quizzesData);

            setQuizzes(quizzesData)
        }

        fetchQuizzes()

        // console.log('App: ', data.quizzesData.quizzes);

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


// export async function getServerSideProps(params) {
//     const databaseDirectory = path.join(process.cwd(), 'data', 'db.json')
//     const bufferData = fs.readFileSync(databaseDirectory)
//     const data = JSON.parse(bufferData)

//     console.log('//////////////////', data.quizzes);


//     return {
//         props: {
//             data: {
//                 quizzesData: data
//             }
//         }
//     }
// }