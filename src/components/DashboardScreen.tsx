import { useState } from 'react';
import { Search, Users, Calendar } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Input } from './ui/input';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from './ui/select';

const districtData = [
  { name: 'চট্টগ্রাম', beneficiaries: 1850 },
  { name: 'বরিশাল', beneficiaries: 1620 },
  { name: 'খুলনা', beneficiaries: 1450 },
  { name: 'সিলেট', beneficiaries: 1280 },
  { name: 'রংপুর', beneficiaries: 980 },
];

const upcomingFollowups = [
  { date: '২৫ অক্টোবর', count: 3 },
  { date: '২৮ অক্টোবর', count: 5 },
  { date: '০২ নভেম্বর', count: 2 },
  { date: '০৫ নভেম্বর', count: 4 },
  { date: '১০ নভেম্বর', count: 1 },
  { date: '১৫ নভেম্বর', count: 6 },
  { date: '২০ নভেম্বর', count: 2 },
];

const leastFollowupAreas = [
  { area: 'রামপুর, সাভার', count: 2 },
  { area: 'কালীগঞ্জ, ঝিনাইদহ', count: 3 },
  { area: 'মধুখালী, ফরিদপুর', count: 4 },
];

const mostFollowupAreas = [
  { area: 'দৌলতপুর, খুলনা', count: 45 },
  { area: 'হাতিয়া, নোয়াখালী', count: 38 },
  { area: 'পটুয়াখালী সদর', count: 32 },
];

export default function DashboardScreen() {
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [selectedUpazila, setSelectedUpazila] = useState<string>('');
  const [selectedUnion, setSelectedUnion] = useState<string>('');
  const [selectedVillage, setSelectedVillage] = useState<string>('');

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          type="text"
          placeholder="🔍 উপকারভোগী অনুসন্ধান করুন (Search Beneficiary)"
          className="pl-10"
        />
      </div>

      {/* Filter Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Select value={selectedDistrict} onValueChange={setSelectedDistrict}>
          <SelectTrigger>
            <SelectValue placeholder="জেলা (District)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল জেলা</SelectItem>
            <SelectItem value="chattogram">চট্টগ্রাম</SelectItem>
            <SelectItem value="barishal">বরিশাল</SelectItem>
            <SelectItem value="khulna">খুলনা</SelectItem>
            <SelectItem value="sylhet">সিলেট</SelectItem>
            <SelectItem value="rangpur">রংপুর</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedUpazila} onValueChange={setSelectedUpazila}>
          <SelectTrigger>
            <SelectValue placeholder="উপজেলা (Upazila)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল উপজেলা</SelectItem>
            <SelectItem value="savar">সাভার</SelectItem>
            <SelectItem value="dhamrai">ধামরাই</SelectItem>
            <SelectItem value="keraniganj">কেরানীগঞ্জ</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedUnion} onValueChange={setSelectedUnion}>
          <SelectTrigger>
            <SelectValue placeholder="ইউনিয়ন (Union)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল ইউনিয়ন</SelectItem>
            <SelectItem value="rampur">রামপুর</SelectItem>
            <SelectItem value="shimulia">শিমুলিয়া</SelectItem>
            <SelectItem value="aminbazar">আমিনবাজার</SelectItem>
          </SelectContent>
        </Select>

        <Select value={selectedVillage} onValueChange={setSelectedVillage}>
          <SelectTrigger>
            <SelectValue placeholder="গ্রাম (Village)" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">সকল গ্রাম</SelectItem>
            <SelectItem value="v1">শিমুলিয়া</SelectItem>
            <SelectItem value="v2">কামারপাড়া</SelectItem>
            <SelectItem value="v3">মাছিমপুর</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Apply Filter Button */}
      <div>
        <Button className="bg-blue-600 hover:bg-blue-700">
          ফিল্টার প্রয়োগ করুন (Apply Filters)
        </Button>
      </div>

      {/* Summary Card */}
      <Card className="border-l-4 border-l-blue-600">
        <CardContent className="pt-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-600">মোট উপকারভোগী</p>
              <p className="text-sm text-gray-500">Total Beneficiaries</p>
              <p className="text-blue-600 mt-2">৭,১৮০</p>
            </div>
            <Users className="w-10 h-10 text-blue-600 opacity-20" />
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Follow-ups */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Calendar className="w-5 h-5 text-blue-600" />
            আগামী ফলো-আপ
          </CardTitle>
          <p className="text-sm text-gray-500">Upcoming Follow-ups (Next 1 Month)</p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-3">
            {upcomingFollowups.map((followup, index) => (
              <div key={index} className="p-3 bg-blue-50 rounded-lg border border-blue-200 text-center">
                <p className="text-sm text-gray-600">{followup.date}</p>
                <p className="text-blue-600 mt-1">{followup.count} টি</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Follow-up Area Lists */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Least Follow-up Areas */}
        <Card>
          <CardHeader>
            <CardTitle>সর্বনিম্ন ফলো-আপ এলাকা</CardTitle>
            <p className="text-sm text-gray-500">Least Follow-up Areas</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leastFollowupAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-green-50 rounded-lg border border-green-200">
                  <span>{area.area}</span>
                  <Badge className="bg-green-600">{area.count} টি</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Most Follow-up Areas */}
        <Card>
          <CardHeader>
            <CardTitle>সর্বোচ্চ ফলো-আপ এলাকা</CardTitle>
            <p className="text-sm text-gray-500">Most Follow-up Areas</p>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {mostFollowupAreas.map((area, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-orange-50 rounded-lg border border-orange-200">
                  <span>{area.area}</span>
                  <Badge className="bg-orange-500">{area.count} টি</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* District Chart */}
      <Card>
        <CardHeader>
          <CardTitle>জেলা অনুযায়ী উপকারভোগী</CardTitle>
          <p className="text-sm text-gray-500">Beneficiaries by District (Southern Bangladesh)</p>
        </CardHeader>
        <CardContent>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={districtData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="beneficiaries" fill="#2563eb" />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
