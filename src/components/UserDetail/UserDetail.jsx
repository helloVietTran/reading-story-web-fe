import { useState } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useQuery } from '@tanstack/react-query';

import BreadCumb from '@/components/BreadCumb/BreadCumb';
import Container from '@/components/Layout/Container/Container';
import formatDate from '@/utils/formatDate';
import { queryKey } from '@/config/queryKey';
import { getUser } from '@/api/userApi';
import LevelBox from '@/components//Box/LevelBox/LevelBox';
import DefaultLayout from '@/components/Layout/DefaultLayout/DefaultLayout';
import { getCommentsByUserId } from '@/api/commentApi';

function UserDetail() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [activeItem, setActiveItem] = useState('item 1');
  const page = 1;

  const { darkTheme } = useSelector((state) => state.theme);

  const { data: userData, isError } = useQuery({
    enabled: !!userId,
    queryKey: [queryKey.USER_INFO, userId],
    queryFn: () => getUser(userId),
  });

  const { data: commentData } = useQuery({
    enabled: !!userId,
    queryKey: [queryKey.commentsOfUser(userId), userId, page],
    queryFn: () => getCommentsByUserId(userId, page),
  });

  if (isError || !userData) navigate('/404');

  return (
    <DefaultLayout>
      <Container isBackgroundVisible>
        <div
          className={`p-4 min-h-[800px] ${darkTheme ? 'dark dark:text-gray-200' : ''}`}
        >
          <BreadCumb />

          <div className="flex mb-4 text-sm">
            <div className="w-[90px] h-[90px] min-w-[40px] bg-transparent rounded overflow-hidden mr-2">
              <img
                alt="avatar"
                src={userData?.imgSrc || '/images/anonymous/anonymous.png'}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex-1">
              <div className="font-bold text-xl dark:text-yellow-300 text-blue-500">
                {userData.name}
              </div>

              <LevelBox
                process={userData.level.process}
                level={userData.level.level}
              />

              <p className="mt-2">
                Ngày đăng ký: {formatDate(userData.createdAt)}
              </p>
              <p className="mt-2">
                Linh thạch:{' '}
                <span className="text-red-500 font-medium">
                  {userData.point || 100}
                </span>
              </p>
            </div>
          </div>

          <ul className="flex border-b text-sm font-medium mb-5">
            <li
              className={`cursor-pointer px-4 py-2 border border-b-0 rounded-t-md ${
                activeItem === 'item 1'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-yellow-300 border-gray-300 dark:border-gray-600'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => setActiveItem('item 1')}
            >
              Bình luận
            </li>
            <li
              className={`cursor-pointer px-4 py-2 border border-b-0 rounded-t-md ml-2 ${
                activeItem === 'item 2'
                  ? 'bg-white dark:bg-gray-700 text-blue-600 dark:text-yellow-300 border-gray-300 dark:border-gray-600'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300'
              }`}
              onClick={() => setActiveItem('item 2')}
            >
              Truyện theo dõi
            </li>
          </ul>

          {activeItem === 'item 1' && (
            <div className="text-sm">
              <h3 className="text-lg font-semibold mb-5">Bình luận mới nhất</h3>
              <div className="overflow-x-auto">
                <table className="table-base">
                  <thead>
                    <tr className="table-header">
                      <th colSpan={2} className="px-4 py-2">
                        Tên truyện
                      </th>
                      <th className="px-4 py-2">Chapter</th>
                      <th className="px-4 py-2">Thời gian</th>
                      <th className="px-4 py-2">Nội dung</th>
                    </tr>
                  </thead>
                  <tbody>
                    {commentData?.data?.map((comment) => (
                      <tr key={comment.id}>
                        <td className="table-cell">
                          <Link to="">
                            <img
                              src={comment.story.imgSrc}
                              alt="story-logo"
                              className="table-image"
                            />
                          </Link>
                        </td>
                        <td className="table-cell">
                          <Link to="" className="table-story-name">
                            {comment.story.name}
                          </Link>
                        </td>
                        <td className="table-cell">
                          <div className="flex-space-between-center ">
                            <Link className="text-sm text-blue-500 hover:underline">
                              Chapter {comment.atChapter}
                            </Link>
                          </div>
                        </td>
                        <td className="table-cell">
                          <div className="flex-space-between-center ">
                            <time className="time-text">
                              {comment.createdAt}
                            </time>
                          </div>
                        </td>
                        <td className="table-cell">{comment.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {activeItem === 'item 2' && (
            <div className="text-sm mt-4">
              <h3 className="text-lg font-semibold mb-5">Truyện theo dõi</h3>
              <span>Người dùng này không công khai Truyện theo dõi</span>
            </div>
          )}
        </div>
      </Container>
    </DefaultLayout>
  );
}

export default UserDetail;
